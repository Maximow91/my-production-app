import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { type Profile } from "@/entities/Profile";
import { profileReducer } from "../../model/slice/profileSlice";
import { componentRender } from "@/shared/lib/test/componentRender/componentRender";
import { EditableProfileCard } from "./EditableProfileCard";
import { $api } from "@/shared/api/api";

const profile: Profile = {
  id: "1",
  firstname: "testname",
  lastname: "testlastname",
  age: 25,
  currency: Currency.RUB,
  country: Country.Armenia,
  city: "Moscow",
  username: "test123",
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: "1",
        username: "admin",
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe("features/EditableProfileCard", () => {
  test("readonly must be changed", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditBtn"),
    );
    expect(screen.getByTestId("EditableProfileCardHeader.CanselBtn"));
  });

  test("On cancel press must skip all values", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditBtn"),
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));
    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
    await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user");
    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CanselBtn"),
    );
    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("testname");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue(
      "testlastname",
    );
  });

  test("must show error", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditBtn"),
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveBtn"),
    );
    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph"),
    ).toBeInTheDocument();
  });

  test("if no error, must send PUT request to server", async () => {
    const mockPutReq = jest.spyOn($api, "put");
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditBtn"),
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveBtn"),
    );
    expect(mockPutReq).toHaveBeenCalled();
  });
});

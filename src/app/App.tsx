import { Suspense, useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { useSelector } from "react-redux";
import { getInitedAuthData, initAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { PageLoader } from "@/widgets/PageLoader";

export const App = () => {
  const dispatch = useAppDispatch();
  const isInited = useSelector(getInitedAuthData);

  useEffect(() => {
    void dispatch(initAuthData());
  }, [dispatch]);

  if (!isInited) {
    return <PageLoader />;
  }

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

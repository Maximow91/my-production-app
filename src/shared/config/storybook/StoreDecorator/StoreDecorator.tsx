import { type Decorator } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { articleDetailsReduser } from 'entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from 'features/addCommentForm'
import { loginReducer } from 'features/authByUserName/model/slice/loginSlice'
import { profileReducer } from 'features/editableProfileCard'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice'
import { type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReduser,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => {
    const decorator: Decorator = (Story) => (
        <StoreProvider initialState={initialState} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
            <Story />
        </StoreProvider>
    )
    return decorator
}

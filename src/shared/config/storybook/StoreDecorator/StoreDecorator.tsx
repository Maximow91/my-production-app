import { type Decorator } from '@storybook/react'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { addCommentFormReducer } from '@/features/addCommentForm'
import { profileReducer } from '@/features/editableProfileCard'
import { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { loginReducer } from '@/features/authByUserName/testing'
import { articleDetailsReduser } from '@/entities/Article/testing'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing'

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

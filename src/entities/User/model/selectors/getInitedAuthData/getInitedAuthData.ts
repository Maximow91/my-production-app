import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getInitedAuthData = (state: StateSchema) => state.user._inited

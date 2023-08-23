import { type StateSchema } from '@/app/providers/StoreProvider'

export const getInitedAuthData = (state: StateSchema) => state.user._inited

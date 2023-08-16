import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export const getValidateProfileErrors = (state: StateSchema) => state.profile?.validateErrors

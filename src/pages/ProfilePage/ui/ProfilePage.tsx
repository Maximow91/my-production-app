import { profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducerList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage

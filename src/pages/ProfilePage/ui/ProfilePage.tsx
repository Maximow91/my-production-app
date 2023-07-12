import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const reducers: ReducerList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage

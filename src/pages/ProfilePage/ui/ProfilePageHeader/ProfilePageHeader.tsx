import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { getProfileData, getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile'
import { Text } from 'shared/ui/Text/Text'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile')

    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileReadOnly)
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)

    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCanselEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        dispatch(updateProfileData())
        dispatch(profileActions.setReadonly(true))
    }, [dispatch])

    return (
        <HStack max justify={'between'} className={classNames('', {}, [props.className])}>
            <Text title={t('Профиль')}/>
            {canEdit && (
                <div >
                    {readonly
                        ? (
                            <CustomButton onClick={onEdit} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</CustomButton>
                        )
                        : (
                            <HStack gap='8' >
                                <CustomButton onClick={onSave} theme={ButtonTheme.OUTLINE}>{t('Сохранить')}</CustomButton>
                                <CustomButton onClick={onCanselEdit} theme={ButtonTheme.OUTLINE_RED}>{t('Oтменить')}</CustomButton>
                            </HStack>
                        )}

                </div>
            )}

        </HStack>
    )
}

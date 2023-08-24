import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { getUserAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { HStack } from '@/shared/ui/Stack'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { ButtonTheme, CustomButton } from '@/shared/ui/CustomButton'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
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
                            <CustomButton data-testid='EditableProfileCardHeader.EditBtn' onClick={onEdit} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</CustomButton>
                        )
                        : (
                            <HStack gap='8' >
                                <CustomButton data-testid='EditableProfileCardHeader.SaveBtn' onClick={onSave} theme={ButtonTheme.OUTLINE}>{t('Сохранить')}</CustomButton>
                                <CustomButton data-testid='EditableProfileCardHeader.CanselBtn' onClick={onCanselEdit} theme={ButtonTheme.OUTLINE_RED}>{t('Oтменить')}</CustomButton>
                            </HStack>
                        )}

                </div>
            )}

        </HStack>
    )
}

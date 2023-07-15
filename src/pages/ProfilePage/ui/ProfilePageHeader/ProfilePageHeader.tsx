import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile'
import { Text } from 'shared/ui/Text/Text'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile')

    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileReadOnly)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCanselEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
        dispatch(profileActions.setReadonly(true))
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [props.className])}>
            <Text title={t('Профиль')}/>
            {readonly
                ? (
                    <CustomButton onClick={onEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</CustomButton>
                )
                : (
                    <div className={cls.btnsBlock}>
                        <CustomButton onClick={onSave} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('Сохранить')}</CustomButton>
                        <CustomButton onClick={onCanselEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED}>{t('Oтменить')}</CustomButton>
                    </div>
                )}

        </div>
    )
}

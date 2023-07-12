import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation()

    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)

    return (
        <div className={classNames(cls.ProfileCard, {}, [props.className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')}/>
                <CustomButton className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</CustomButton>
            </div>
            <div className={cls.data}>
                <Input className={cls.input} value={data?.firstname}/>
                <Input className={cls.input} value={data?.city} />
            </div>
        </div>
    )
}

import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { CustomButton } from 'shared/ui/CustomButton'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className as string])}>
            <div className={cls.inputRow} >
                <span className={cls.inputTitle}>{t('Имя пользователя') + ':'}</span>
                <Input className={cls.input} type='text' />
            </div>
            <div className={cls.inputRow} >
                <span className={cls.inputTitle}>{t('Пароль') + ':'}</span>
                <Input className={cls.input} type='text' />
            </div>
            <CustomButton className={cls.loginBtn} >{t('Войти')}</CustomButton>
        </div>
    )
}

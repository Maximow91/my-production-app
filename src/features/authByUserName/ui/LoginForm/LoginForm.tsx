import { getLoginState } from 'features/authByUserName/model/selectors/getLoginState/getLoginState'
import { loginByUsername } from 'features/authByUserName/model/services/loginByUsername/loginByUsername'
import { loginActions } from 'features/authByUserName/model/slice/loginSlice'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props
    const { t } = useTranslation()

    const dispatch = useDispatch()

    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback((name: string) => {
        dispatch(loginActions.setUsername(name))
    }, [dispatch])

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className as string])}>
            <Text title={t('Форма авторизации')}/>
            {!!error && (
                <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />
            )}
            <div className={cls.inputRow} >
                <span className={cls.inputTitle}>{t('Имя пользователя') + ':'}</span>
                <Input
                    value={username}
                    className={cls.input}
                    onChange={onChangeUsername}
                    type='text' />
            </div>
            <div className={cls.inputRow} >
                <span className={cls.inputTitle}>{t('Пароль') + ':'}</span>
                <Input
                    value={password}
                    onChange={onChangePassword}
                    className={cls.input}
                    type='text' />
            </div>
            <CustomButton
                onClick={onLoginClick}
                disabled={isLoading}
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn} >{t('Войти')}</CustomButton>
        </div>
    )
})

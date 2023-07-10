import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { getLoginError } from 'features/authByUserName/model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from 'features/authByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from 'features/authByUserName/model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from 'features/authByUserName/model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from 'features/authByUserName/model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from 'features/authByUserName/model/slice/loginSlice'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './LoginForm.module.scss'

const initialReducers: ReducerList = {
    loginForm: loginReducer
}

export interface LoginFormProps {
    className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props
    const { t } = useTranslation()

    const dispatch = useDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    const onChangeUsername = useCallback((name: string) => {
        dispatch(loginActions.setUsername(name))
    }, [dispatch])

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        if (username && password) {
            dispatch(loginByUsername({ username, password }))
        }
    }, [dispatch, username, password])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    )
})

export default LoginForm

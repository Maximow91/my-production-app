import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { Modal } from 'shared/ui/Modal'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const { t } = useTranslation()

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className as string])}>
            <CustomButton onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.appLinks}>
                {t('Войти')}
            </CustomButton>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, veritatis earum maiores tempore sed aut? Doloremque repellendus neque quo quaerat explicabo, quia corporis earum est molestiae exercitationem? Maxime, dolor ex!
            </Modal>
        </div>
    )
}

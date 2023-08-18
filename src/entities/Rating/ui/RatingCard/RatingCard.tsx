import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import cls from './RatingCard.module.scss'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { useCallback, useState } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { ButtonTheme, CustomButton } from '@/shared/ui/CustomButton'
import { Input } from '@/shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feeedback?: string) => void
}

export const RatingCard = (props: RatingCardProps) => {
    const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept } = props

    const { t } = useTranslation()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(0)
    const [feedback, setFeedback] = useState('')

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount)
    }, [onAccept, starsCount])
    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align='center' gap='8' >
                <Text title={title}/>
                <StarRating size={40} onSelect={onSelectStars}/>
            </VStack>
            <Modal lazy isOpen={isModalOpen}>
                <VStack max gap='32'>
                    <Text title={feedbackTitle} />
                    <Input placeholder={t('Ваш отзыв')} />
                    <HStack max gap='16' justify='end'>
                        <CustomButton onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>{t('Закрыть')}</CustomButton>
                        <CustomButton onClick={acceptHandler}>{t('Отправить')}</CustomButton>
                    </HStack>
                </VStack>
            </Modal>
        </Card>
    )
}

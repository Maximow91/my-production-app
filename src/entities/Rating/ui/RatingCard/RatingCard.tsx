import { Card } from '@/shared/ui/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { StarRating } from '@/shared/ui/StarRating'
import { useCallback, useState } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { ButtonTheme, CustomButton } from '@/shared/ui/CustomButton'
import { Input } from '@/shared/ui/Input'
import { useTranslation } from 'react-i18next'
import { useDevice } from '@/shared/lib/hooks/useDevice'
import { Drawer } from '@/shared/ui/Drawer'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    rate?: number
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feeedback?: string) => void
}

export const RatingCard = (props: RatingCardProps) => {
    const { className, title, feedbackTitle, hasFeedback, rate = 0, onCancel, onAccept } = props

    const { t } = useTranslation()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')

    const isMobile = useDevice()

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
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <VStack data-testid='RatingCard' max gap='32'>
            <Text title={feedbackTitle} />
            <Input data-testid={'RatingCard.Input'} placeholder={t('Ваш отзыв')} value={feedback} onChange={setFeedback}/>
            <HStack max gap='16' justify='end'>
                <CustomButton data-testid='RatingCard.Close' onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>{t('Закрыть')}</CustomButton>
                <CustomButton data-testid='RatingCard.Send' onClick={acceptHandler}>{t('Отправить')}</CustomButton>
            </HStack>
        </VStack>
    )

    const modal = (
        <Modal lazy isOpen={isModalOpen}>
            {modalContent}
        </Modal>
    )

    const drawer = (
        <Drawer isOpen={isModalOpen} onClose={cancelHandler} >
            {modalContent}
        </Drawer>
    )

    return (
        <Card className={className}>
            <VStack align='center' gap='8' max >
                <Text title={starsCount ? t('Спасибо за оценку!') : title}/>
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars}/>
            </VStack>
            {isMobile ? drawer : modal}
        </Card>
    )
}

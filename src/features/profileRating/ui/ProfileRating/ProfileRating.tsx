import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ProfileRatingProps {
    id: string
    className?: string
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { id, className } = props
    const { t } = useTranslation()

    const authData = useSelector(getUserAuthData)

    const canRate = authData?.id !== id

    const { data, isLoading } = useGetProfileRating({ userId: authData?.id ?? '', profileId: id })

    const [rateProfileMutation] = useRateProfile()

    const rating = data?.[0]

    const onRatePress = useCallback(async (starsCount: number) => {
        try {
            void rateProfileMutation({
                rate: starsCount,
                userId: authData?.id ?? '',
                profileId: id
            })
        } catch (error) {
            console.log(error)
        }
    }, [rateProfileMutation, id, authData])

    if (isLoading) {
        return <Skeleton width={'100%'} height={140} />
    }
    return (
        canRate ? <RatingCard rate={rating?.rate} className={className} title={t('Оцените пользователя')} onAccept={onRatePress} /> : null
    )
})

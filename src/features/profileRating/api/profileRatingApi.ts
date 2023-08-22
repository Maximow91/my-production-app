
import { type Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetProfileRatingArgs {
    userId: string
    profileId: string
}

interface RateProfileArgs {
    userId: string
    profileId: string
    rate: number
    feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints(
    {
        endpoints: (build) => ({
            getProfileRating: build.query<Rating[], GetProfileRatingArgs>({
                query: ({ userId, profileId }) => ({
                    url: '/profile-ratings',
                    params: {
                        userId,
                        profileId
                    }
                })
            }),
            // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
            rateProfile: build.mutation<void, RateProfileArgs >({
                query: (arg) => ({
                    url: '/profile-ratings',
                    method: 'POST',
                    body: arg
                })
            })

        }),
        overrideExisting: false
    }
)

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery

export const useRateProfile = profileRatingApi.useRateProfileMutation

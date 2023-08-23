import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { ProfileRating } from '@/features/profileRating'
import { VStack } from '@/shared/ui/Stack'

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return null
    }

    return (
        <Page >
            <VStack gap='16'>
                <EditableProfileCard id={id} />
                <ProfileRating id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage

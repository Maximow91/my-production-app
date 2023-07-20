
import type { Meta, StoryObj } from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ProfileCard } from './ProfileCard'
import avatar from 'shared/assets/test/image.jpg'

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard
}

export default meta
  type Story = StoryObj<typeof ProfileCard>

export const Primary: Story = {
    render: () => <ProfileCard data={{
        username: 'John',
        age: 22,
        country: Country.Belarus,
        firstname: 'Jony',
        lastname: 'Clinton',
        city: 'Manchester',
        currency: Currency.RUB,
        avatar
    }} />
}

export const Loading: Story = {
    render: () => <ProfileCard isLoading={true} />
}

export const WithError: Story = {
    render: () => <ProfileCard error='error!' />
}

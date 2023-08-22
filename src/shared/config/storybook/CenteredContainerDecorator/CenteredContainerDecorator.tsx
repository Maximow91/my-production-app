import { type Decorator } from '@storybook/react'

export const CenteredContainerDecorator: Decorator = (Story) => (<div style={{
    marginTop: 200,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}}><Story /></div>)

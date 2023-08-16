import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/test/componentRender/componentRender'
import { userEvent } from '@storybook/testing-library'
import { Counter } from './Counter'
import { act } from 'react-dom/test-utils'

describe('Counter', () => {
    test('render test', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        act(() => {
            userEvent.click(screen.getByTestId('increment-btn'))
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        act(() => {
            userEvent.click(screen.getByTestId('decrement-btn'))
        })

        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})

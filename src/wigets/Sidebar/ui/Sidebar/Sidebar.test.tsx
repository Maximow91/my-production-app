import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'wigets/Sidebar'
import { renderWithTranslation } from '../../../../shared/lib/classNames/test/renderWithTranslation/renderWithTranslation'

describe('CustomButton', () => {
    test('render test', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('collaps sidebar', () => {
        renderWithTranslation(<Sidebar />)
        const btn = screen.getByTestId('toggle-sidebar')
        fireEvent.click(btn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})

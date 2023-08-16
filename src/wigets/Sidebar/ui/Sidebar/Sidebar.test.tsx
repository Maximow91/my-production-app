import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/test/componentRender/componentRender'
import { Sidebar } from '@/wigets/Sidebar'

describe('CustomButton', () => {
    test('render test', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('collaps sidebar', () => {
        componentRender(<Sidebar />)
        const btn = screen.getByTestId('toggle-sidebar')
        fireEvent.click(btn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})

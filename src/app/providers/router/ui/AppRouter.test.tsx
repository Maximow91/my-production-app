import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router'
import { componentRender } from '@/shared/lib/test/componentRender/componentRender'
import { AppRouter } from './AppRouter'
import { screen } from '@testing-library/react'
import { UserRole } from '@/entities/User'

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn()
        }))
    })
})

describe('Router tests', () => {
    test('should render page ', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout()
        })
        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    })

    test('should return page not found ', () => {
        componentRender(<AppRouter />, {
            route: '/sddfdfdf'
        })
        const page = screen.getByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    })

    test('redirect unauthorized user to main page ', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1')
        })
        const page = await screen.findByTestId('MainPage')
        expect(page).toBeInTheDocument()
    })

    test('opened to the closed page for authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { _inited: true, authData: {} }
            }
        })
        const page = await screen.findByTestId('ProfilePage')
        expect(page).toBeInTheDocument()
    })

    test('Denied close', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _inited: true, authData: {} }
            }
        })
        const page = await screen.findByTestId('ForbiddenPage')
        expect(page).toBeInTheDocument()
    })

    test('not redirect', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } }
            }
        })
        const page = await screen.findByTestId('AdminPanelPage')
        expect(page).toBeInTheDocument()
    })
})

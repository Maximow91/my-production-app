import { classNames } from '../classNames/classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass')
    })

    test('with additional class', () => {
        const expectedStr = 'someClass addedClass'
        expect(classNames('someClass', {}, ['addedClass'])).toBe(expectedStr)
    })

    test('with mods', () => {
        const expectedStr = 'someClass addedClass hovered scrollable'
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['addedClass'])).toBe(expectedStr)
    })

    test('with mods false', () => {
        const expectedStr = 'someClass addedClass hovered'
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['addedClass'])).toBe(expectedStr)
    })
})

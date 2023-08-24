import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ListBox } from '@/shared/ui/Popups'

import { Country } from '../../model/types/country'
import { classNames } from '@/shared/lib/classNames/classNames'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((v: string) => {
        onChange?.(v as Country)
    }, [onChange])

    return (
        <ListBox
            direction='top right'
            readonly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            defaultValue={t('Укажите страну')}
            items={options}/>
    )
})

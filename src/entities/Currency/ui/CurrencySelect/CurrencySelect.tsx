import { Currency } from '../../model/types/currency'
import { Select } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.EUR, content: 'EUR' },
    { value: Currency.RUB, content: 'RUB' },
    { value: Currency.USD, content: 'USD' }
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((v: string) => {
        onChange?.(v as Currency)
    }, [onChange])

    return (
        <Select
            readonly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}/>
    )
})

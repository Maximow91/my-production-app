import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { Currency } from '../../model/types/currency'

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
        <ListBox
            direction='top right'
            readonly={readonly}
            label={t('Валюта')}
            className={classNames('', {}, [className])}
            value={value} defaultValue={t('Укажите валюту')}
            items={options} onChange={onChangeHandler}
        />
    )
})

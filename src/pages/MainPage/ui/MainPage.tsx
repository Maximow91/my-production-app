import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { HStack } from 'shared/ui/Stack'
import { Page } from 'wigets/Page'

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <Page>
            {t('Главная страница')}
            <div>sdfdfdfd</div>
            <HStack>
                <div>sdsdd</div>
                <ListBox
                    defaultValue={'Выберите значение'}
                    onChange={(value: string) => { console.log(value) }}
                    value={''}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: '1234' },
                        { value: '3', content: '1235', disabled: true },
                        { value: '4', content: '12' }
                    ]}
                />
            </HStack>
            <div>sdfdfdfd</div>
            <div>sdfdfdfd</div>
            <div>sdfdfdfd</div>
            <div>sdfdfdfd</div>
            <div>sdfdfdfd</div>
        </Page>
    )
}

export default MainPage

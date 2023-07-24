import { ArticleList, ArticleView } from 'entities/Article'
import { useTranslation } from 'react-i18next'

const ArticlesPage = () => {
    const { t } = useTranslation('article')

    return (<div>
        <ArticleList view={ArticleView.LIST} articles={[]} />
    </div>)
}

export default ArticlesPage

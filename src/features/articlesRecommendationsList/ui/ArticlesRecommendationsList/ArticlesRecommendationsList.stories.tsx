import { type Article } from 'entities/Article'
import { ArticlesRecommendationsList } from './ArticlesRecommendationsList'

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'sdsdsd'
}

export default {
    title: 'features/ArticlesRecommendationsList',
    component: <ArticlesRecommendationsList />,
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' }
                ]
            }
        ]
    }
}

const Template = () => <ArticlesRecommendationsList />

export const Normal = Template.bind({})

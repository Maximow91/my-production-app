import { type User } from 'entities/User'
import { type ArticleType, type ArticleBlockType } from '../const/const'

export interface BaseArticleBlock {
    id: string
    type: ArticleBlockType
}

export interface ImageArticleBlock extends BaseArticleBlock {
    type: ArticleBlockType.IMAGE
    src: string
    title: string

}

export interface TextArticleBlock extends BaseArticleBlock {
    type: ArticleBlockType.TEXT
    title?: string
    paragraphs: string[]
}

export interface CodeArticleBlock extends BaseArticleBlock {
    type: ArticleBlockType.CODE
    code: string
}

export type ArticleBlock = ImageArticleBlock | TextArticleBlock | CodeArticleBlock

export interface Article {
    id: string
    title: string
    user: User
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
}

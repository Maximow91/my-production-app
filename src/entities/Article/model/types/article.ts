import { type User } from 'entities/User'

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

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

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

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

export enum ArticleView {
    LIST = 'LIST',
    TILE = 'TILE'
}

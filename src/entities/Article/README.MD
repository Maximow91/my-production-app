## Сущнность статьи

_____

### Описание: 
используется для получения с сервера и отображения статей/списков статей


#### Public Api 

- Components

 `ArticleDetails` - компонент c информацией о статье

 `ArticleList` - компонент со списком статей
 
- Types 

`Article` - тип, описывающий статью

`ArticleDetailsSchema` - тип, описывающий участок стейта для работы с текущей открытой статьей


- Selectors

 `getArticleDetailsData` - селектор для получения данных текущей открытой статьи

  `getArticleDetailsError` - селектор для получения обьекта ошибки при загрузке статьи

  `getArticleDetailsIsLoading` - селектор для получения состояния загрузки статьи


- Constants

`ArticleView` - константа выбора вида отображения статьи (большая или малая карточка)

`ArticleType` - константа категории статьи (Экономика, IT, политика и т.д.)

`ArticleType` - константа блоков статьи (Текстовый,кодовый, крартики)

`ArticleSortField` - константа видов сортировки статьей






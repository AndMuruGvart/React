

type Key = 'div'


type TGetJSXPropsProp<T extends Key> = {
  [N in keyof JSX.IntrinsicElements[T]]?: JSX.IntrinsicElements[T][N] 
}


type TDivProps = TGetJSXPropsProp<Key>

const props: TDivProps = {

    // some: '1233' // throw error потому что не содержится в атрибутах div

    className: 'handler' // не выкидывает ошибку так как валидно для div элемента

}

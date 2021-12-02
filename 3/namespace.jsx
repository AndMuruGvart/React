type TDivElement = JSX.IntrinsicElements['div'];


type TGetJSXPropsProp<P> =
{
    [K in keyof JSX.IntrinsicElements]: ReturnType<typeof P> extends JSX.IntrinsicElements[K] ? K : never
};

type TDivProps = TGetJSXPropsProp<'img'>

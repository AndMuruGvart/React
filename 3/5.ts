import * as React from 'react';

interface IProps {

    firstProp: string

}

function HomeComponent(props: { firstProp: string }) {
    return (
        <div>
            { props.firstProp }
        </div>
    )
}


type TMyType<T>=T extends React.ComponentType<infer IProps>? IProps:never;

type t = TMyType<typeof HomeComponent>; 
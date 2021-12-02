interface IHomeTask {
    data: string;
    numericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {

    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]

}


const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}



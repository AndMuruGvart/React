interface MyInterface {
    howIDoIt: string,
    someArray: Array<string | number>,
    withData: Array<{
        howIDoIt: string,
        someArray: Array<string | number>
    }>
}


const MyHomeTask: MyInterface  = {

    howIDoIt: "I Do It Wel",

    someArray: ["string one", "string two", 42],

    withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],

};

console.log (MyHomeTask);
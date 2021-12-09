
type Str=string;

function concat(first: string, second:string):Str {
    return first+second;
};

const sum=concat('Hello ', 'World');
console.log(sum);
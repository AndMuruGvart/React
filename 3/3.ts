interface MyArray<T> {

    [N: number]: T;
  
    reduce(fn:
         (previousValue: T, currentValue: T, currentIndex: number, array: T[])
          => T, initialValue: T): T;
  
};

const initialValue = 0;

const example=[1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6

console.log(example);


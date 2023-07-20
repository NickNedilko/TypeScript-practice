// Задайте правильные ts типы, для классических js;
let age:number;
 age = 50;
 let userName:string
  userName = 'Max';
  let toggle: boolean;
  toggle = true;
  let empty: null;
 empty = null;
 let notInitialize:undefined;
 notInitialize=undefined;
// let callback = (a) => { return 100 + a };

// Работа с массивами и обьектами=========================;
let arr: number[]
arr = [1, 2, 3]

let arr1: number[][]
arr1 = [[1], [2]]

let arr2: any[]
arr2 = [1, 'sring', true]

let item: {product: string, qua?: number};

item = {
    product: "lemon",
    qua: 23

}
// Задавайте тип для переменной в которую можно сохранить любое значение.
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let some: unknown;
if (typeof some === 'string') {
    some = 'Text';
}

let str: string;
if (typeof some === 'string') {
    str = some;
}

// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
// Кортеж, tuple
let person: [string, number]
person = ['Max', 21];
person = ['Bill', 43]

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Status { LOADING, READY };

const program = {
    status: Status.LOADING,
}
if (program.status === Status.LOADING) {
    console.log('Program is loading')
}

// Сделайте переменную, которая может принимать или строку или число.
// Union type
let ages: number | string;
ages = 12
if (typeof age === 'string') {
    ages = 'eight'
}
ages = 'nine';

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
// literal type

let activity: 'disable' | 'enable';
activity = 'disable';


// Укажите типы для следующих функций


function showMessage (message:string):void {
  console.log(message);
}


function calc(num1:number, num2: number):number{
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// Создайте свой тип данных на основе имеющихся данных.

type PageType = {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
    details?: {createAt: Date, updateAt: Date }
}


const page1: PageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: PageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
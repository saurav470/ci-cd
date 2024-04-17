import express from 'express';

const fn: () => void = () => {
  console.log('Hello World')
}

fn()


const obj={
  name:"shahbaz",
  age:22,
  city:"india",
  city1:[1,2,3,3]
}



console.log(obj["age"],obj.age,Object.keys(obj),Object.values(obj))
import express from 'express';

const app = express();
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


app.get('/',(req,res)=>{
  res.send("hello")
})

app.listen(process.env.PORT,()=>{
  console.log("server is running")
})



console.log(obj["age"],obj.age,Object.keys(obj),Object.values(obj))
const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send({msg: "Hello world!"});
})
app.get('/students',(req,res)=>{
    const students = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Jim Brown', age: 21 }
    ];
    res.send(students);
})

app.get("/class",(req,res)=>{
    const classnames=[
        {id:1, name:"Class 1"},
        {id:2, name:"Class 2"},
        {id:3, name:"Class 3"}
    ]
    resonse.send(classnames);
    
})
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
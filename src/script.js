//getting our ids
const result = document.getElementById('result')
const filter = document.getElementById('filter')
//initialize an  array called listItems
const listItems = []
getData()
//fetching our data
async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50')
    //call res.json to get our data 
    const data = await res.json()
     //testing our data
    console.log(data)
}

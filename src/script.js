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
    const { results } = await res.json()
     //testing our data
    //console.log(data)

    //clear results
     result.innerHTML = ''

     results.forEach(user => {
         //testing our users
         //console.log(user)
         const li = document.createElement('li')
         //pushing li
         listItems.push(li)
         //add innerHTML
        li.innerHTML = `
         <img src="${user.picture.large}" alt="${user.name.first}">
         <div class="user-info">
         <h4>${user.name.first} ${user.name.last}</h4>
         <p>${user.location.city}, ${user.location.country}</p>
         </div>
         `

         //putting to the HTML
         result.appendChild(li)
     });


}


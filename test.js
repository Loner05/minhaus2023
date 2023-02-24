const db = require("./db")

let id = 7


// const lambda = () =>{
// let founded 
// for(let i = 0; i < Object.keys(db).length; i++){
//     console.log(Object.keys(db)[i])
//  founded =db[Object.keys(db)[i]].find(item => item.id == id )
//  if(founded)return founded
// }

// }

// const yende = () =>{
// let maelo = 
// db.forEach(theme => maelo.push.theme)




// }
const manta = () =>{
 let maelo = []
let mata =Object.keys(db).forEach(theme => {
    db[Object.keys(db)[Object.keys(db).indexOf(theme)]].map( pregunta => maelo.push(pregunta.pregunta))
    
   })
   return maelo
}
// // console.log(lambda())

// // console.log(lambda())
// //let lama =  db[Object.keys(db)].map( item => item.pregunta)

// // console.log(Object.keys(db))
 
// // console.log(maelo)

 console.log(manta())
// console.log(Object.keys(db)[Object.keys(db).indexOf("Hospedaje")])
//console.log(db[Object.keys(db)[Object.keys(db).indexOf("Hospedaje")]])

let canga = []

let mata = Object.keys(db).forEach(theme => canga.push(theme))



// console.log(canga)




// const FAQtheme = () =>{

//     return(
//     <div>
     
//     <h1>{Object.keys(db)[1]}</h1>
//     { db[Object.keys(db)[1]].map(item =>
//       <h4>{item.pregunta}</h4>
//     )
//     }
    
//     </div>
//     )}


<h1>{Object.keys(db)[1]}</h1>

{

db[Object.keys(db)[Object.keys(db).indexOf("Hospedaje")]].map(item =>
  <h4>{item.pregunta}</h4>
)
}
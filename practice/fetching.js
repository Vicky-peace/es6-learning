import axios from "axios";
// //Fetching data using fetch
// const fetchData = async() =>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data)=>{
//         console.log(data)
//     }).catch((error) =>{
//         console.log(error)
//     })
// }
// fetchData();


// fetching data using axios
// axios.get("https://jsonplaceholder.typicode.com/users")
// .then((res)=>{
//     // console.log(res.data)
//     //destructuring
//     const {name, username} = res;
//     console.log(name, username);
// }).catch((error) =>{
//     console.log(error);
// })


// const fetchData= async() =>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//       console.log(error)
//     })
// }
// fetchData()

axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) =>{
    // console.log(res.data)

    //destructure
    const destructuredData = res.data.map(({id,username,email})=>({id,username,email}))
    console.log(destructuredData)
}).catch((error)=>{
    console.log(error)
})
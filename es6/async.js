//Async AWait

const fetchData = async() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
    }).catch((error) =>{
        console.log(error)
    })
}
fetchData();


// const fetchData = async() =>{
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await data.json()
//     console.log(posts)
// }
// fetchData();


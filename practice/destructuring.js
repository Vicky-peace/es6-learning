import axios from "axios";

//Example1 using axios
// axios.get("https://jsonplaceholder.typicode.com/users")
// .then((res)=>{
//     //Destructure the response data
//     const {data} = res;
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

//example 2 using axios



// Make a GET request to fetch data
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Destructure the response data
    const [firstUser] = response.data;

    // Log the destructured data
    console.log(firstUser);
  })
  .catch(error => {
    // Handle any errors
    console.error('Axios error:', error);
  });



// Make a GET request to fetch data
// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     // Destructure the response data
//     const destructuredData = response.data.map(({ id, name, email, username }) => ({ id, name, email, username }));

//     // Log the destructured data
//     console.log(destructuredData);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Axios error:', error);
//   });

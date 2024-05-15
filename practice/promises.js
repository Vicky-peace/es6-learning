import axios from 'axios';

let p = new Promise((resolve,reject) =>{
    let a = 1 + 1
    if(a == 2){
        resolve('success')
    }else{
        reject('Failed')
    }
})

.then((message) =>{
    console.log('This is in the then ' + message)
}).catch((message) =>{
    console.log(message)
})

let userLeft = true;
let userWatchingCatMeme= true;

function watchTutorialPromise(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if(userWatchingCatMeme){
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise()
.then((message)=>{
    console.log('success:'  + message)
}).catch((error)=>{
    console.log(error.name + '' +error.message)
})

//fetching data from the apiand use of promises
function fetchUserData(){
    //return a new promise
    return new Promise((resolve,reject)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) =>{
            resolve(res.data);
        }).catch((error)=>{
            console.log(error);
            reject(error)
        })
    })
}

//Call the fetchUserData function and handle the returned promise
fetchUserData()
.then((users)=>{
    console.log('Fetched user data:', users);
}).catch((error)=>{
    console.log('Error fetching user data:', error);
});
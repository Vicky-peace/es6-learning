// PROMIESES : an asynchronous action that may complte at some point in the future and produce value

/*
states of a promise
1.Pending
2.fulfilled
3.rejected

*/


//Example of a promise
const fetchData = () =>{
    const promise = new Promise((resolve,pending, reject) =>{
        console.log('Fetching data');
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 1500)
    });
    return promise;
}
fetchData().then((text) =>{
      console.log(text);
}).catch((error) =>{
    console.log(error);
});
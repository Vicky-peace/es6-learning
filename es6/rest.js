//..rest operator in js: ...rest operator allows you to collect multiple elements into a single array.

const sample = (a,b,...args) =>{
    console.log(a,b)
    args.forEach((arg) =>{
        console.log(arg)
    })
    console.log(typeof args)
}
sample(1,2,3,4,5,6,7,8,9,10)
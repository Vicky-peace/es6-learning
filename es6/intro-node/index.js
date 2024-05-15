import data from  '../data/data.json' assert {type: 'json'};

console.log(data)


const loopJSON = (data) => {
    data && data.forEach((item, index) =>{
        console.log(`index : ${index}: Item ${item.id} - ${item.age} `)
    })
}
loopJSON(data)
// A callback is a function that is passed  to another function as an argument and is executed after some operation has been completed.

const callback = () =>{
    function doHomework(subject, callAlertFinished){
        console.log(`started my ${subject} homework.` );
        callAlertFinished();  // callback finsihed
    }
    function alertFinished(){
        console.log("Finished my homework")
    }
    doHomework("maths", alertFinished);
}
callback();  //started my maths homework . Finished my homework
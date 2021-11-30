//Real Life Promise
//Promise => Pending (Initial State)
//Pending -> Successful => FullFill
//pending -> Unsuccessful => Failure

//JavaScript Promise
//Promise => will perform Async Operation (Initiall State = Pending)
//pending -> Successful => Resolve
//pending -> unsuccessful => Reject

const p = new Promise((Resolve, Reject) => {
    setTimeout(() => {
        Resolve("Promise Successful");
    }, 3000);
    //Reject("Promise Unsuccessful");
})

p
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    })

console.log("After!");
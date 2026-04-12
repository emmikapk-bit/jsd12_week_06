// In JS, a Promise is an object representing 
// the eventual completion (or failure) of 
// an asynchronous operation and its resulting value.

// there are 3 states when a promise runs.
// 1.pending
// 2.fulfilled
// 3.Rejected

//resolve ใช้กัยเคสที่ fulfilled
//reject ใช้กัยเคสที่ Rejected

const myPromise = new Promise((resolve, reject) => {
    const status = false ;

    if(status) {
        resolve("Operation ran successfully!")
    } else{
        reject("Something went wrong! ")
    }; 
}); // output an object

//console.log(myPromise);

// catch is protec error not run
// finally is ทำให้รันต่อ ค่อให้ False
myPromise.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log("process finished.")
});
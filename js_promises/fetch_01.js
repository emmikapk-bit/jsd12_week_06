fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => {
    return response.json();
})
.then((data)=>{
console.log(data);
return data;
})
.catch((error) => {
    console.log("Something went wrong!", error);
});
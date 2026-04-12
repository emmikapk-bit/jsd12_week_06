const url = "https://api.api-ninjas.com/v1/dogs?name=golden%20retriever";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "N0bM63xYNcAFT3CTWHWCBHkfRQTQBdqtBAPziCiM",
    "Content-Type": "application/json",
  },
};

fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  //handle error gracefully
  .catch((error) => {
    console.log("Something went wrong!", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Something went wrong!", error);
  });

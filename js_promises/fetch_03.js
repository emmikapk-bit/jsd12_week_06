function getAllDogByLetter(letter) {
  let allResults = [];

  const url = `https://api.api-ninjas.com/v1/dogs?name=${letter}`;
  return fetch(url, {
    headers: { "X-Api-Key": "N0bM63xYNcAFT3CTWHWCBHkfRQTQBdqtBAPziCiM" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        allResults.push(...data);
      }
      console.log(
        `Found ${allResults.length} animals containing the letter ${letter}`,
      );
      console.log(allResults);
    });
}
getAllDogByLetter("dachshund");

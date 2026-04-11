function getAllDogs(dogs) {
  let allResults = [];
  function fetchNextPage() {
    const url = `https://api.api-ninjas.com/v1/dogs?name=${letter}`;

    return fetch(url, {
      headers: { "X-Api-Key": "N0bM63xYNcAFT3CTWHWCBHkfRQTQBdqtBAPziCiM" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          console.log(
            `Found ${allResults.length} Dogs containing the letter ${letter}`,
          );
          console.log(allResults);
          return allResults;
        }

        allResults.push(...data);
        return allResults;
      });
  }
}

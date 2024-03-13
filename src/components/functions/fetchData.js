const url = "https://api.api-ninjas.com/v1/dogs?shedding=3";
const key = "lAMo/AG1t4ivfGpY85Ls8A==mcjAOAYeg9b4NNa2";
const options = {
  method: "GET",
  headers: { "X-Api-Key": key },
};

export const fetchData = async (setData, setLoading, setError) => {
  // fetch data from the api
  // if there was an error during response to json display the error
  // if there were no errors - set loading state to false (finished loading)
  // save data just fetched to state
  try {
    const response = await fetch(url, options);
    const data = await response.json(); // json, not text - i need it to be an array- not a string
    setData(data); // data is the name of array in this api
    setLoading(false);
    // console.log(typeof data); // check type
  } catch (error) {
    setError(error.message);
    setLoading(false);
  }
};

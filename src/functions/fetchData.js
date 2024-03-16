const url = "https://api.api-ninjas.com/v1/dogs?shedding=3";
const key = "lAMo/AG1t4ivfGpY85Ls8A==mcjAOAYeg9b4NNa2";
const options = {
  method: "GET",
  headers: { "X-Api-Key": key },
};
export var DogArray = null;

// export const fetchData = async (setData, setLoading, setError) => {
//   // fetch data from the api
//   // if there was an error during response to json display the error
//   // if there were no errors - set loading state to false (finished loading)
//   // save data just fetched to state
//   try {
//     const response = await fetch(url, options);
//     const data = await response.json(); // json, not text - i need it to be an array- not a string
//     setData(data); // data is the name of array in this api
//     setLoading(false);
//     // DogArray = data;
//     // console.log(typeof data); // check type
//   } catch (error) {
//     setError(error.message);
//     setLoading(false);
//   }
// };

export const fetchData = async () => {
  try {
    DogArray = [];
    const response = await fetch(url, options);
    const data = await response.json(); // json, not text - i need it to be an array- not a string
    return data;
  } catch (error) {
    console.log("error");
    return null;
  }
};
DogArray = await fetchData(); // try to save the dog array here and export from app!!

export function setDogArray(newDogArray) {
  DogArray = newDogArray;
}
// export const setCache = (key, value)=>{
//   localStorage.setItem(key, value);
// }

// export const getCache = (key)=>{
//   const v = localStorage.getItem(key);
//   return v;
// }

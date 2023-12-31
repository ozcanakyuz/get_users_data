import getData from './App';

async function fetchData() {
  // try-catch block created
  try {
    //* Get the information and post information of the user with id 1
    const result = await getData(1);
    return result;
  } catch (error) {
    console.error("Error in fetchData:", error.message);
  }
}

fetchData();

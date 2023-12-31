import axios from "axios";

// This code is often used to perform multiple asynchronous operations simultaneously and combine their results.
async function getData(id) {
  // try-catch block created
  try {
    //! (try) tries the block of code
    const [user, post] = await Promise.all([
      //* to retrieve a specific user's information
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
      //* to retrieve posts written by the same user
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
    ]);

    //* These two data are combined using the expression "{ ...user.data, post: post.data }". This expression uses the spread operator ("...") to retrieve all properties of the "user.data" object and create a new object. Additionally, the "post" property of this new object is populated with "post.data". As a result, a new object called "data" is obtained.
    const data = { ...user.data, post: post.data };
    //* print "data" object to console
    console.log(data);
    return { user, post };
  } catch (error) {
    //! If an error occurs in the block, it handles this error (catch)
    console.error("Error getting the data", error.message);
    throw error;
  }
}

export default getData;

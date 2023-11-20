import axios from "axios";

const rootAPI = "http://localhost:8000/api/v1";
const userApi = rootAPI + "/user";

// ============= user api

export const postUser = async (userObj) => {
  try {
    const { data } = await axios.post(userApi, userObj);

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      mesage: error.message,
    };
  }
};
export const loginUser = async (userObj) => {
  try {
    const { data } = await axios.post(userApi + "/login", userObj);

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      mesage: error.message,
    };
  }
};

// ============= transaction api
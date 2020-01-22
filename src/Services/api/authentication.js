import axios from "axios";

export const addUsers = async () => {
  const data = await axios.post("http://localhost:3001/api/user/register", {
    someparameter: "parameter"
  });
  const res = await res.json();
};

export const getUsers = async () => {
  let res = await axios.get("https://reqres.in/api/users?page=1");
  let { data } = res.data;
};

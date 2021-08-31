import axios from "axios";

export const taskUrl = "https://ninmu-server.herokuapp.com/api/tasks";

// export const createTask = async () => {
//   const response = await axios({
//     url: `${taskUrl}`,
//     method: "POST",
//     data: task,
//   })
//     .then((res) => console.log(res))
//     .catch(console.error);
//   console.log(response);
//   return response;
// };

export const getTasks = async () => {
  const response = await axios.get(taskUrl).then(({ data }) => {
    return data;
  });
  // console.log(response);
  return response;
};

// export const editTask = async () => {
//   const response = await axios({
//     url: `${taskUrl}/${taskId}`,
//     method: "POST",
//     data: task,
//   })
//     .then((res) => console.log(res))
//     .catch(console.error);
//   console.log(response);
//   return response;
// };

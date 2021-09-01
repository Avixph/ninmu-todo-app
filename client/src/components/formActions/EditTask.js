import { useState, useEffect, useRef } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import { taskUrl } from "../../services/api-helper";

const EditTask = (props) => {
  const [task, setTask] = useState({
    title: "",
    task_Detail: "",
  });

  const [editInput, setEditInput] = useState(
    props.edit ? props.edit.value : ""
  );

  const fetchUpdate = async () => {
    const response = await axios
      .get(`${taskUrl}/${taskId}`)
      .then(({ data }) => {
        return data;
      });
    setBrand(response.task);
  };
  useEffect(() => {
    fetchUpdate();
  }, []);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const newTask = Object.assign(task, updatedField);
    console.log(newTask);
    setTask(newTask);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      url: `${taskUrl}`,
      method: "POST",
      data: task,
    })
      .then((res) => setCreatedTask(res.data.task))
      .catch(console.error);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return <div></div>;
};

export default EditTask;

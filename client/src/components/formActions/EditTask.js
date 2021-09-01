import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/solid";
import axios from "axios";
import TaskForm from "./TaskForm";
import { taskUrl } from "../../services/api-helper";

const EditTask = (props) => {
  const [task, setTask] = useState({
    title: "",
    task_Detail: "",
  });
  const taskId = props.taskId;

  const fetchUpdate = async () => {
    const response = await axios
      .get(`${taskUrl}/${taskId}`)
      .then(({ data }) => {
        return data;
      });
    setTask(response.task);
  };
  useEffect(() => {
    fetchUpdate();
  }, []);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedTask = Object.assign(task, updatedField);
    console.log(editedTask);
    setTask(editedTask);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      url: `${taskUrl}/${taskId}`,
      method: "POST",
      data: task,
    })
      .then((res) => console.log(res))
      .catch(console.error);
  };

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="inline-flex items-center px-3.5 py-2.5 border border-green-400 rounded-sm shadow-sm text-sm  text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2  focus:ring-green-500">
              <PencilIcon
                className={`${open ? "" : ""} w-5 h-5 text-white`}
                aria-hidden="true"
              />
            </Disclosure.Button>
            <Disclosure.Panel>
              <TaskForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default EditTask;

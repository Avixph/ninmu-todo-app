import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import axios from "axios";
import TaskForm from "./TaskForm";
import { taskUrl } from "../../services/api-helper";

const CreateTask = (props) => {
  const [task, setTask] = useState({
    title: "",
    task_Detail: "",
  });

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
      .then((res) => {
        return res;
      })
      .catch(console.error);
  };

  // if (createdTask) {
  //   return <Redirect to={{ pathname: "/" }} />;
  // }

  return (
    <>
      <div className="w-full">
        <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="inline-flex justify-between items-center px-4 py-2 border border-yellow-400 rounded-sm shadow-sm text-sm  text-white bg-yellow-400 hover:bg-MainYellow focus:outline-none focus:ring-2  focus:ring-yellow-500">
                  <span className="text-3xl font-bold leading-tight text-white">
                    Add Tasks
                  </span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-10 h-10 text-white`}
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
        </div>
      </div>
    </>
  );
};

export default CreateTask;

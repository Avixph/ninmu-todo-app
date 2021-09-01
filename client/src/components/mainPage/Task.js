import { useState } from "react";
import { Redirect } from "react-router-dom";

import { PencilIcon, XIcon } from "@heroicons/react/solid";
import axios from "axios";
import { taskUrl } from "../../services/api-helper";

const Task = (props) => {
  const [deletedTask, setDeletedTask] = useState(false);
  const taskId = props._id;
  console.log(taskId);

  const deleteTask = async () => {
    await axios({
      url: `${taskUrl}/${taskId}`,
      method: "DELETE",
    })
      .then(() => {
        setDeletedTask(true);
      })
      .catch(console.error);
  };

  const completeTask = (event) => {
    event.preventDefault();
    const complete = event.target;
    complete.classList.toggle("line-through");
  };

  if (deletedTask) {
    return (
      <Redirect to={{ pathname: "/", deleted: { msg: "Model deleted!" } }} />
    );
  }

  return (
    <>
      <li
        key={props._id}
        className="col-span-1 bg-mainYellow rounded-sm shadow"
      >
        <div
          onClick={completeTask}
          className="w-full flex justify-between p-6 space-x-6"
        >
          <div className="flex-1 truncate">
            <div className="flex  space-x-3">
              <h3 className="mt-1 text-gray-900 items-center text-xl font-bold ">
                {props.title}
              </h3>
            </div>

            <p className="mt-1 text-mainBlack text-left text-sm overflow-y-scroll">
              {props.task_Detail}
            </p>
          </div>
        </div>
        <div>
          <div className="-mt-2 mb-2 mr-3 flex  flex-row-reverse space-x-3 space-x-reverse divide-gray-200">
            <button
              type="button"
              onClick={deleteTask}
              className="inline-flex items-center px-3.5 py-2.5 border border-red-400 rounded-sm shadow-sm text-sm text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2  focus:ring-red-500"
            >
              <XIcon className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="inline-flex items-center px-3.5 py-2.5 border border-green-400 rounded-sm shadow-sm text-sm  text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2  focus:ring-green-500"
            >
              <PencilIcon className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Task;

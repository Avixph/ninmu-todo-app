import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";

const TaskForm = ({ handleSubmit, handleChange }) => {
  return (
    <form onClick={handleSubmit} className="space-y-8">
      <div className="space-y-8 sm:space-y-5">
        <div>
          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Title
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    onChange={handleChange}
                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-sm sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Details
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="about"
                  name="task_Detail"
                  rows={3}
                  onChange={handleChange}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-sm"
                  defaultValue={""}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Write a breif description about task.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <Disclosure.Button
            type="button"
            className="bg-white py-2.5 px-4 border border-red-400 rounded-sm shadow-sm text-sm font-medium text-white 
                bg-red-400 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
          >
            Cancel
          </Disclosure.Button>
          <Disclosure.Button
            type="submit"
            className="ml-3 inline-flex justify-center py-2.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
          >
            Submit
          </Disclosure.Button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;

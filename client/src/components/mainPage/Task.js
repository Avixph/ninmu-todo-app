import { PencilIcon, XIcon, CheckIcon } from "@heroicons/react/solid";

const Task = (props) => {
  // console.log(props._id);
  return (
    <>
      <li
        key={props._id}
        className="col-span-1 bg-mainYellow rounded-sm shadow"
      >
        <div className="w-full flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="mt-1 text-gray-900 text-xl font-bold ">
                {props.title}
              </h3>
            </div>

            <p className="mt-1 text-mainBlack text-sm overflow-y-scroll ">
              {props.task_Detail}
            </p>
          </div>
        </div>
        <div>
          <div className="-mt-2 mb-2 mr-3 flex  flex-row-reverse space-x-3 space-x-reverse divide-gray-200">
            <button
              type="button"
              className="inline-flex items-center px-2.5 py-2.5 border border-grey-400 rounded-sm shadow-sm text-sm text-white bg-red-400 hover:bg-red-400 focus:outline-none focus:ring-2  focus:ring-red-500"
            >
              <XIcon className="w-5 h-5 text-gray-200" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="inline-flex items-center px-2.5 py-2.5 border border-grey-400 rounded-sm shadow-sm text-sm  text-white bg-green-400 hover:bg-green-400 focus:outline-none focus:ring-2  focus:ring-green-500"
            >
              <CheckIcon className="w-5 h-5 text-gray-200" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="inline-flex items-center px-2.5 py-2.5 border border-grey-400 rounded-sm shadow-sm text-sm  text-white bg-blue-400 hover:bg-blue-400 focus:outline-none focus:ring-2  focus:ring-blue-500"
            >
              <PencilIcon
                className="w-5 h-5 text-gray-200"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Task;

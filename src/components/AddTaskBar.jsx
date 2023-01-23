import React from 'react';
import {PlusIcon} from "@heroicons/react/24/solid/index.js";

function AddTaskBar(props) {
    return (
        <div className="w-full h-[40%] flex flex-col justify-center items-center p-4">

            <div className="w-full h-28 flex justify-center items-center text-2xl">
                <span className="font-bold mx-1">{props.name}</span>
                <span className="text-gray-400">Taskify</span>
            </div>

            <div className="flex flex-col my-4 p-2 justify-center items-center cursor-pointer">
                <div className="rounded-md w-fit border border-1 border-gray-400 p-3">
                    <PlusIcon className="w-4 font-bold text-black"/>
                </div>
                <p className="text-gray-400 my-3">Add Task</p>
            </div>

        </div>
    );
}


export default AddTaskBar;
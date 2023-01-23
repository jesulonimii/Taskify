import React from 'react';
import TaskItemTags from "./TaskItemTags.jsx";
import {ChatBubbleBottomCenterIcon} from "@heroicons/react/24/solid/index.js";
import ImageThumbnailRound from "./ImageThumbnailRound.jsx";

function TaskItem(props) {

    const task = props.task

    return (
        <div className={`bg-white max-h-[50%] min-h-[30%] rounded-md my-1 shadow-md flex flex-col p-3 ${props.className}`}>

            <p>{task.task}</p>

            <div className="flex my-2">
                <TaskItemTags tag={task.id} className="bg-white border-gray-400" key={task.id} />

                {
                    task.tags.map((tag) => {
                        return <TaskItemTags tag={tag} color="gray-300" />
                    })
                }
            </div>

            {/* contributors */}
            <div className="flex mt-1">

                <div className="w-[100%] h-fit flex">


                    {
                        task.contributors.map((contributor) => {
                            return <ImageThumbnailRound src={contributor.img} alt={contributor.username} className="-mx-1"  />
                        })
                    }


                </div>

                <a className="w-fit justify-center items-center flex cursor-pointer">
                    <ChatBubbleBottomCenterIcon className="w-5 text-gray-500" />
                </a>


            </div>

        </div>
    );
}

TaskItem.defaultProps = {
    name : "New task"
}

export default TaskItem;
import React from 'react';
import TaskItem from "./TaskItem.jsx";

function GoalBar(props) {

    const tasks = props.tasks

    return (
        <div className={`w-full min-w-[25%] bg-gray-200 h-full rounded-md flex flex-col px-4 py-2 ${props.className}`}>

            <div className="w-full h-[15%] flex items-center font-bold my-2 md:my-0">
                {props.goalName}
            </div>

            <div className="w-full  h-full flex flex-col">


                {
                    tasks.map((task) => {
                        return <TaskItem task={task} key={task.id} />
                    })
                }


            </div>


        </div>
    );
}

GoalBar.defaultProps = {
    id: "000",
    goalName : "New Task"
}


export default GoalBar;
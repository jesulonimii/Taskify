import React from 'react';

function TaskItemTags(props) {
    return (
        <div className={`rounded w-fit h-fit py-0.5 px-2 mr-2 border text-sm bg-${props.color} border-${props.color} ${props.className}`}>

            {props.tag}

        </div>
    );
}

export default TaskItemTags;
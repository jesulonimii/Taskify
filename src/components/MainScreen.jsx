import React, {useEffect, useState} from 'react';
import GoalBar from "./GoalBar.jsx";
import Button from "./Button.jsx";
import ImageThumbnailRound from "./ImageThumbnailRound.jsx";
import {BellIcon} from "@heroicons/react/24/outline/index.js";

let goals;


function MainScreen(props) {

    const [goals, setGoals] = useState([]);


    useEffect(() => {
        fetchGoalsData(setGoals)
    })

    return (
        <div className={`bg-white w-full h-full flex flex-col p-5 md:p-8 ${props.className}`}>

            <div className="w-full h-[10%] rounded-md flex justify-between items-center">
                <h1 className="font-bold text-3xl">Goals</h1>

                <div className="w-fit h-fit flex flex-row-reverse">
                    <ImageThumbnailRound src="/img/img.png"  className="w-10 h-10"/>

                    <span className="flex justify-center items-center mx-4 cursor-pointer">
                        <BellIcon className="w-7 text-gray-600" />
                        <span className="bg-red-600 w-2.5 aspect-square rounded-full absolute ml-3 -mt-3 border border-white" />
                    </span>

                    <Button name="Add Goal" className=""/>

                </div>

            </div>

            <div className="w-full h-full min-h-[20%] rounded-md my-4 flex flex-col md:flex-row" >

                {
                    goals.map((goal) => {
                        return <GoalBar goalName={goal.name} className="mx-1 my-3 md:my-1" tasks={goal.tasks} key={goal.id} />
                    })
                }

            </div>



        </div>
    );
}

const fetchGoalsData = (setGoals) =>{

    const link = window.location.origin


    fetch(`${link}/data.json`)
        .then((response) => response.json())
        .then((res) => {
            setGoals(res)
        })

}



export default MainScreen;
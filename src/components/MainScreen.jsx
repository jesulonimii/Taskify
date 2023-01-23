import React, {useEffect, useState} from 'react';
import GoalBar from "./GoalBar.jsx";
import Button from "./Button.jsx";

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
                <Button name="Add Goal" className=""/>
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

    fetch("http://192.168.0.104:5173/data.json")
        .then((response) => response.json())
        .then((res) => {
            setGoals(res)
        })

}



export default MainScreen;
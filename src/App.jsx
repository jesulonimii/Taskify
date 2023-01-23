import React from 'react';
import Sidebar from "./components/Sidebar.jsx";
import MainScreen from "./components/MainScreen.jsx";


function App(props) {
    return (
        <div className="bg-white w-full h-screen flex">

            <Sidebar className=" hidden md:flex" />

            <MainScreen />



        </div>
    );
}

export default App;
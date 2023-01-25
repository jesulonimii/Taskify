import React from 'react';
import {
    ArrowRightOnRectangleIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    CogIcon,
    HomeIcon,
    PencilIcon, QuestionMarkCircleIcon,
    UserGroupIcon
} from "@heroicons/react/24/outline/index.js";

function Sidebar(props) {
    return (
        <div className={`bg-white w-[25%] h-full flex flex-col py-8 px-8 border-r border-gray-300 ${props.className}`}>
            <div className="w-full h-[15%] rounded-md">
                <svg width="148" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M42.339 23.673V10.72H40V8.327h7.077v2.394h-2.359v12.952h-2.38ZM55.624 8.327v2.394H51.76v3.765h3.314v2.394H51.76v4.399h3.864v2.394H49.38V8.327h6.244Zm3.95 15.346V10.72h-2.34V8.327h7.078v2.394h-2.359v12.952h-2.38Zm14.423-9.31c0 1.166-.386 2.128-1.098 2.803.691.47 1.098 1.207 1.098 2.149v4.358h-2.38v-4.358c0-.758-.467-1.269-1.24-1.269h-1.383v5.627h-2.38V8.327h3.763c2.197 0 3.62 1.474 3.62 3.683v2.353Zm-2.38 0V12.01c0-.777-.467-1.289-1.24-1.289h-1.383v4.931h1.383c.773 0 1.24-.511 1.24-1.289Zm8.12 9.31h-2.38V8.327h2.38v15.346Zm6.797.327c-2.278 0-3.722-1.514-3.722-3.785v-.737h2.38v.737c0 .839.508 1.391 1.342 1.391.834 0 1.322-.552 1.322-1.391v-1.453c0-.839-.488-1.391-1.322-1.391-2.278 0-3.722-1.514-3.722-3.785v-1.8C82.812 9.513 84.256 8 86.534 8c2.257 0 3.701 1.514 3.701 3.785v.716h-2.38v-.716c0-.839-.487-1.391-1.321-1.391s-1.342.552-1.342 1.391v1.8c0 .84.508 1.392 1.342 1.392 2.257 0 3.701 1.514 3.701 3.785v1.453c0 2.27-1.444 3.785-3.701 3.785ZM95.67 8.327V21.28h3.457v2.394H93.29V8.327h2.38Zm10.498 0h2.441l-3.315 8.103v7.243h-2.379V16.43l-3.356-8.103h2.44l2.095 5.545 2.074-5.545Zm4.805 15.346v-2.701h2.379v2.7h-2.379Zm13.386-4.195v.737c0 2.27-1.464 3.785-3.722 3.785-2.257 0-3.701-1.514-3.701-3.785v-8.43c0-2.27 1.444-3.785 3.701-3.785 2.258 0 3.722 1.514 3.722 3.785v.716h-2.379v-.716c0-.839-.509-1.391-1.343-1.391s-1.322.552-1.322 1.391v8.43c0 .839.488 1.391 1.322 1.391.834 0 1.343-.552 1.343-1.391v-.737h2.379ZM130.648 24c-2.258 0-3.702-1.514-3.702-3.785v-8.43c0-2.27 1.444-3.785 3.702-3.785 2.257 0 3.722 1.514 3.722 3.785v8.43c0 2.27-1.465 3.785-3.722 3.785Zm0-2.394c.834 0 1.342-.552 1.342-1.391v-8.43c0-.839-.508-1.391-1.342-1.391-.834 0-1.322.552-1.322 1.391v8.43c0 .839.488 1.391 1.322 1.391Zm15.176-13.279H148v15.346h-2.217v-7.796l-2.115 7.796h-1.586l-2.095-7.734v7.734h-2.217V8.327h2.176l2.929 11.192 2.949-11.192ZM2 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Zm12 24h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Zm6-16v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H20Z"></path></svg>
            </div>
            <div className="w-full h-[45%] my-5  rounded-md">

                <div className="flex py-2 bg-gray-200 rounded-md px-2 cursor-pointer">
                    <HomeIcon className="w-6 text-gray-600"/>
                    <p className="font-medium text-gray-600 mx-5 text-md">Dashboard</p>
                </div>

                <div className="flex py-2 px-2 cursor-pointer">
                    <ChartPieIcon className="w-6 text-gray-600 font-bold"/>
                    <p className="font-medium text-gray-600 mx-5 text-md">Analysis</p>
                </div>

                <div className="flex py-2 px-2 cursor-pointer">
                    <PencilIcon className="w-6 text-gray-600 font-bold"/>
                    <p className="font-medium text-gray-600 mx-5 text-md">Journal</p>
                </div>

                <div className="flex py-2 px-2 cursor-pointer">
                    <Cog6ToothIcon className="w-6 text-gray-600 font-bold"/>
                    <p className="font-medium text-gray-600 mx-5 text-md">Settings</p>
                </div>

                <div className="flex py-2 px-2 cursor-pointer">
                    <QuestionMarkCircleIcon className="w-6 text-gray-600 font-bold"/>
                    <p className="font-medium text-gray-600 mx-5 text-md">Help</p>
                </div>



            </div>
            <div className="w-full h-full rounded-md flex flex-col justify-end ">

                <div className="flex py-2 px-2 cursor-pointer">
                    <ArrowRightOnRectangleIcon className="w-6 text-gray-900 font-bold"/>
                    <p className="font-medium text-gray-900 mx-5 text-md">Log Out</p>
                </div>


            </div>
        </div>
    );
}

export default Sidebar;
import React from 'react';
import {PaperClipIcon} from "@heroicons/react/24/solid/index.js";

function Header(props) {
    return (
        <div className="w-full h-[10%] p-4 flex flex items-center justify-center">
            <div className="flex justify-center items-center">
                <PaperClipIcon className="w-5"/>
                <p className="font-bold text-md mx-2">Taskify</p>
            </div>
        </div>
    );
}

export default Header;
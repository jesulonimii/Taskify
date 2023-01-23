import React from 'react';

function ImageThumbnailRound(props) {
    return (
        <div className={`w-7 cursor-pointer aspect-square bg-center bg-cover border-2 border-white rounded-full overflow-clip  ${props.className}`}>
            <img src={props.src} alt={props.alt}/>
        </div>
    );
}

export default ImageThumbnailRound;
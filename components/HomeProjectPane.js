import React, {useEffect,useRef} from 'react';
import Link from "next/link";

const HomeProjectPane = ({position, color, imageURL, backgroundImage, link}) => {
    
    return (
        <Link href={link}>
        <div className="desktop-infinite-scroll-panel" style={{width: '50vw', heigth: '100px', backgroundColor: color, top: position.top, bottom: position.bottom, position: 'absolute', backgroundImage: backgroundImage, backgroundPosition: 'center',
        backgroundSize: 'cover'}}>
            {/* <img src={imageURL} style={{maxWidth: '100% !important',height: 'auto', width: 'auto',}}/>  */}
        </div>
        </Link>
    )



}


export default HomeProjectPane;
import react from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import "./scrollbtn.css";

function ScrollBtn(){
    function handleScroll()
    {
        window.scrollTo(0, 0);
    }
    return(
        <div className="scrollbtn" onClick={handleScroll}>
            <AiOutlineArrowUp/>
        </div>
    );
}

export default ScrollBtn;
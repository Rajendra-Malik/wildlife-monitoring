import React, { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";


function GoToTop() {

    const [topBtn, setTopBtn] = useState(false);
    
    function goToTopHandlet() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }


    function listenToScroll(){
        let hiddenHeight = 250;
        const show_window_scroll = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(show_window_scroll);
        if (show_window_scroll > hiddenHeight) {
            setTopBtn(true);
        } else {
            setTopBtn(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, [])
    

    return (
        <>
            {
                topBtn ? (<div className="gotoTop">
                        <div className="top-btn" onClick={goToTopHandlet}><IoIosArrowRoundUp className="top-btn--icon"/></div>
                        </div>):
                      
                        (<div></div>)
            }
        </>
    );
}


export default GoToTop;
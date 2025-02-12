import React, { useState } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft} from "react-icons/fa6";

const Carousel = ({ slider }) => {
    
    let [current, setCurrent] = useState(0);
    let previousSlide = () => {
        if (current === 0) setCurrent(slider.length - 1);
        else setCurrent(current - 1);
    }

    let nextSlide = () => {
        if (current === slider.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }

    return (
        <div className="overflow-hidden relative h-[720px]">
            <div className="flex transition ease-out duration-40"
                style={ {
                            transform:`translateX(-${current * 100}%)`,
                        }
                      }>
                {
                    slider.map((s) => {
                        return <img src={s} key={ s.id} alt="" className=""/>
                    })
                }
            </div>
            <div className="absolute top-0 h-full w-full flex justify-between items-center text-[#d1cfcf] px-10 text-3xl">
                <button onClick={previousSlide}>
                   <FaCircleArrowLeft />
                </button>
                <button onClick={nextSlide}>
                   <FaCircleArrowRight />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {
                    slider.map((s, i) => {
                        return <div onClick={() => { setCurrent(i) }}
                            key={"circle" + i}
                            className={`rounded-full w-5 h-5
                             ${i == current ? "bg-white" : "bg-[#d1cfcf]"}`}></div>
                    })
                }
            </div>
        </div>
    )
}

export default Carousel
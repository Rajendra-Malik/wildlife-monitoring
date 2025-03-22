import { motion } from "framer-motion"

const Card = ({data}) => {
    return (
        <>
            <motion.div className="flex flex-col gap-y-2 h-[180px] w-[330px] "
                 initial={
                    {
                        opacity: 0
                    }
                }
                whileInView={{
                    opacity: 1,
                    scale: 1.0,
                    transition: {
                        duration: 2
                    }
                }}
                viewport={{
                    amount: 0.8
                }}
            >
                <img src={ data.icon} alt="" className="h-[60px] w-[70px]"/>
                <h2 className="font-normal text-lg ">{ data.title}</h2>
                <p className="font-medium opacity-55">{ data.description}</p>
            </motion.div>
        </>
    )
}

export default Card
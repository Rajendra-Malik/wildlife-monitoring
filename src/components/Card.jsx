

const Card = ({data}) => {
    return (
        <>
            <div className="flex flex-col gap-y-2 h-[180px] w-[330px] ">
                <img src={ data.icon} alt="" className="h-[60px] w-[70px]"/>
                <h2 className="font-normal text-lg">{ data.title}</h2>
                <p className="font-medium opacity-55">{ data.description}</p>
            </div>
        </>
    )
}

export default Card
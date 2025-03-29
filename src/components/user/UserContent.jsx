import Store from "../zustand/Store"; // import zustand

const UserContent = () => {
    const { userData } = Store(); // zustand variable 

    return (
            <div className="h-[550px] w-full rounded-2xl  text-center pt-30 font-bold text-3xl">
                WelCome To WildLife Habitat Monitoring
                <p>mr/ms: </p><span>{userData.name}</span>
            </div>
    );
}

export default UserContent;
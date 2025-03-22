import Nav from "./Nav";
import UserContent from "./UserContent";

const User = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <div>
                <UserContent />
            </div>
        </div>
    );
}

export default User;
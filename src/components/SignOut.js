import { auth } from "../data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const handeSignOut = () => {
    auth.signOut()
        .then(function () {
            console.log("User Logged Out!");
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const SignOut = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="bg-gray-200  my-8  min-h-[60vh] w-[440px] m-auto h-fit flex flex-col justify-center items-center">
            <p className="text-gray-400">You are logged in {user.displayName}</p>
            <button className="col-span-3  mt-10 bg-highlight text-white hover:text-highlight: px-7 py-1 rounded-sm" onClick={() => handeSignOut()}>
                Sign out
            </button>
        </div>
    );
};

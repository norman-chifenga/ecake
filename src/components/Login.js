import { useEffect, useRef, useState } from "react";
import { auth } from "../data/firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignOut } from "./SignOut";

const Login = () => {
    const [login, setLogin] = useState(true);
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirm = useRef();
    const [loginError, setLoginError] = useState("");
    const [user] = useAuthState(auth);

    useEffect(() => {
        console.log(user);
    }, [user]);

    console.log(user);

    const resetInputs = () => {
        name.current.value = "";
        email.current.value = "";
        password.current.value = "";
        passwordConfirm.current.value = "";
    };

    const submit = async (e) => {
        e.preventDefault();
        setLoginError("");
        if (!login) {
            fetchSignInMethodsForEmail(auth, email.current.value).then((result) => {
                if (email.current.value === "" && password.current.value === "" && name.current.value === "" && passwordConfirm.current.value === "") {
                    return setLoginError("Please fill all fields");
                }

                if (password.current.value !== passwordConfirm.current.value) {
                    return setLoginError("Passwords do not match");
                }
                result.length <= 0
                    ? createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                          .then((result) => {
                              updateProfile(auth.currentUser, {
                                  displayName: name.current.value,
                              })
                                  .then(() => {
                                      console.log("userUpdated name");
                                  })
                                  .catch((error) => {
                                      console.log("error update username");
                                  });
                          })
                          .catch((error) => {
                              console.log(error.code, error.message);
                          })
                    : setLoginError("An account is already registered with your email");
            });
        } else {
            if (email.current.value === "" && password.current.value === "") {
                return setLoginError("Please fill all fields");
            }
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((user) => {
                    resetInputs();
                })
                .catch((error) => {
                    setLoginError("Invalid password or username");
                });
        }
    };

    return (
        <>
            {!user ? (
                <div className="w-screen min-h-[80vh]  mb-[3em]  ">
                    <div className="text-gray-400 text-[16px] mt-11 mx-auto h-fit w-fit flex flex-col p-4 bg-gray-200">
                        <p className="w-full text-lg my-3 text-center font-bold text-gray-500">{login ? "Log in" : "Sign up"} </p>
                        <form className="flex flex-col min-w-[350px] text-grid gap-3 my-5 w-[100%]" onSubmit={submit}>
                            {!login && (
                                <>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        className="bg-gray-200 w-[100%] col-span-2 text-sm h-4 hover:border-highlight border-b-2 border-gray-500 outline-none hover:outline-none"
                                        type="text"
                                        ref={name}
                                        name="name"
                                        id="name"
                                    />
                                </>
                            )}
                            <label htmlFor="email">Email</label>
                            <input
                                className="bg-gray-200 pl-1 w-[100%]   col-span-2 text-sm h-4 hover:border-highlight border-b-2 border-gray-500 outline-none hover:outline-none"
                                type="email"
                                ref={email}
                                name="email"
                                id="email"
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                className="bg-gray-200 w-[100%]   col-span-2 text-sm h-4 hover:border-highlight border-b-2 border-gray-500 outline-none hover:outline-none"
                                type="password"
                                ref={password}
                                name="password"
                                id="password"
                            />
                            {!login && (
                                <>
                                    <label htmlFor="confirmpassword">Confirm Password</label>
                                    <input
                                        className="bg-gray-200 w-[100%] col-span-2 text-sm h-9 hover:border-highlight border-b-2 border-gray-500 outline-none hover:outline-none"
                                        type="password"
                                        ref={passwordConfirm}
                                        name="confirmPassword"
                                        id="confirmPassword"
                                    />
                                </>
                            )}
                            <div className="col-span-3 text-right">
                                <button onClick={() => setLogin(!login)} className="bg-none text-gray-500 outline-gray-500 px-3">
                                    {login ? "Sign up" : "Already have an account? | Log in"}
                                </button>
                            </div>
                            <button className="col-span-3 bg-highlight text-white hover:text-highlight: px-7 py-1 rounded-sm" type="submit" value="Submit">
                                {login ? "Log in" : "Sign up"}
                            </button>
                            <p className="w-[100%] text-center text-highlight col-span-4">{loginError}</p>
                        </form>
                    </div>
                </div>
            ) : (
                <SignOut />
            )}
        </>
    );
};

export default Login;

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { GiAutomaticSas } from "react-icons/gi";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";



const Register = () => {
    const {signUpWithEmailAndPassword,userUpdate} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUpWithEmailAndPassword = e =>{
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          const name = e.target.name.value;
          const image = e.target.image.value;
          console.log(email,password,name);

          if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/.test(password)){
           return toast.error('Invalid password. The password must consists with at least one capital letter , one special character and 6 characters ')
    
        }


          signUpWithEmailAndPassword(email,password)
          .then(res=>{
            userUpdate(name,image)
            .then(()=>{
                setTimeout(()=>{
                window.location.reload();
               },1000);

               toast.success('Profile successfully created!')
               navigate('/');
                
            })
          })
          .catch(err=>{
            toast.error("err.message")
          })

    };
    return (
        <div className=" max-w-2xl mx-auto min-h-[60vh] px-3 py-3 my-5 flex flex-col  justify-center items-center ">
           <Helmet>
                <title>Grow Barter | Register</title>
            </Helmet>
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-green-100">
            <h2 className="my-3 text-3xl text-green-700 font-semibold text-center">Register New Account</h2>
                <p className="text-sm text-center text-green-600 dark:text-gray-400">Already have an account? Please
                    <Link to='/login' className="focus:underline font-semibold text-green-900 hover:underline"> Login here</Link>
                </p>
                <form onSubmit={handleSignUpWithEmailAndPassword} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-green-600 font-bold">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered dark:border-gray-700  focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 border-green-800 dark:bg-gray-900 dark:text-gray-100 
                                    focus:dark:border-violet-400" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-green-600 font-bold">Img URL</span>
                        </label>
                        <input type="text" placeholder="Image URL" name="image" className="input input-bordered dark:border-gray-700  focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 border-green-800 dark:bg-gray-900 dark:text-gray-100 
                                    focus:dark:border-violet-400" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-green-600 font-bold">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" name="email" className="input input-bordered dark:border-gray-700  focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 border-green-800 dark:bg-gray-900 dark:text-gray-100 
                                    focus:dark:border-violet-400" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-green-600 font-bold">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name="password" className="input input-bordered dark:border-gray-700  focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 border-green-800 dark:bg-gray-900 dark:text-gray-100 
                                    focus:dark:border-violet-400" required />

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-green-500 hover:bg-green-700 text-white">Register</button>
                    </div>
                    
                </form>

            </div>
        </div>
    );
};

export default Register;
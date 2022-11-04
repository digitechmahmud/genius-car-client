import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/UserContext';
import useTitle from '../../Hooks/useTitle';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { user, signIn, signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    useTitle('Login');

    const handleLoginFrom = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
                form.reset();
            })
            .catch(error => console.log(error));
        
        
    }
    const handleGoogleSignIn = () => {
        signInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero w-full my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleLoginFrom}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                                <label className="label flex justify-between">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    <small>Not a member yet? <Link className='text-blue-500' to="/register">Register</Link></small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn bg-orange-600' value="Login" />
                            </div>
                        </form>
                        <div>
                            <h2>Or login using:</h2>
                            <div className='flex justify-center'>
                                <Link onClick={handleGoogleSignIn} className='text-5xl mr-5'><FcGoogle /></Link>
                                <Link  className='text-5xl'><FaGithub /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
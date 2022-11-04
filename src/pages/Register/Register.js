import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/UserContext';
import useTitle from '../../Hooks/useTitle';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
    const { user, createUser } = useContext(AuthContext);

    useTitle("Register");

    const handleRegisterForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
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
                    <h1 className="text-5xl font-bold text-center">Register</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegisterForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p><small>Already have account?</small><small><Link to="/login">Login</Link></small></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn bg-orange-600' value="Register" />
                            </div>
                        </form>
                        <div className='flex justify-center'>
                            <Link className='text-5xl mr-5'><FcGoogle /></Link>
                            <Link className='text-5xl'><FaGithub /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
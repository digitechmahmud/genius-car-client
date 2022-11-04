import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../context/UserContext';
import useTitle from '../../../Hooks/useTitle';
import './Header.css';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    useTitle('Home');
    const manuItems = <>
        <li><Link to='/'>Home</Link></li>  

        {
            user?.uid ?
                <>
                    <li><Link to='/orders'>Orders</Link></li>  
                    <li><Link onClick={logOut}>Log out</Link></li>
                    <div>{user.displayName}</div>
                    <img width={40} height={30} className="rounded-full" src={user.photoURL} alt="" />
                </>
                :
                <li><Link to='/login'>Login</Link></li>   
        }
        
       
    </>
    return (
        <div className="navbar bg-base-100 pt-12 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden md:flex custom-navbar">
                <ul className="menu menu-horizontal p-0">
                   {manuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link><button className="btn btn-outline btn-warning">APPOINTMENT</button></Link>
            </div>
        </div>

    );
};

export default Header;
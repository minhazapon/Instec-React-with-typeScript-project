import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";


const Nav = () => {

    const nav = <>
    
       <li><NavLink to='/' >HOME</NavLink></li>
       <li><NavLink to='/page' >PAGE</NavLink></li>
       <li><NavLink to='/service' >SERVICES</NavLink></li>
       <li><NavLink to='/shop' >SHOP</NavLink></li>
       <li><NavLink to='/news' >NEWS</NavLink></li>
       <li><NavLink to='/contact' >CONTACT</NavLink></li>
    
    
    
    </>


    return (
        <div>


            <div className="navbar bg-base-100 shadow-md  ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {nav}
                  </ul>
                </div>
                <div className="  bg-black p-10 rounded-xl ">
                 <img src="https://html.kodesolution.com/2024/instec-php/images/logo.png" alt="" />
                </div>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {nav}
                </ul>
              </div>
              <div className="navbar-end">
                <div className=" flex items-center gap-5">
                <p className=" bg-slate-400 h-[60px] w-[1px] "></p>
                <NavLink to='' ><CiSearch className=" h-[30px] w-[30px] "></CiSearch></NavLink>
                <NavLink to='' ><PiShoppingCartLight className="  h-[30px] w-[30px] "></PiShoppingCartLight></NavLink>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Nav;
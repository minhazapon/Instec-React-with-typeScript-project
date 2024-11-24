
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";


const ContactBanner = () => {

    return (
        <div>

        
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://www.exascaleproject.org/wp-content/uploads/2019/11/PathForward-scaled.jpg)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content ">
                <div className="  ">
                  <h1 className="mb-5 text-5xl font-bold universe text-white ">Contact</h1>
                  <p className="mb-5 text-white ">
                  “Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson
                  </p>
                  <div className=" flex items-center gap-3">
                    <p className=" hover:text-yellow-500 cursor-pointer text-white">Home</p>
                    <p className=" text-white "><IoIosArrowForward></IoIosArrowForward></p>
                    <p className=" hover:text-yellow-500 cursor-pointer text-white">Page</p>
                    <p className=" text-white "><IoIosArrowForward></IoIosArrowForward></p>
                    <NavLink to='/contact'><p className=" hover:text-yellow-500 cursor-pointer text-white">Contact</p></NavLink>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default ContactBanner;
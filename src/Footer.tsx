import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


const Footer = () => {


    return (
        <div className="  p-10 bg-no-repeat bg-cover"
        
        style={{
            backgroundImage: "url(https://preview.redd.it/wmf4pf98d4l61.png?auto=webp&s=37e925607b22489b26b0cbe0ab844b7af1692946)",
          }}
        
        >

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-20">

                <div>
                <img src="https://html.kodesolution.com/2024/instec-php/images/logo.png" alt="" />
                <p className=" mt-5 text-gray-300 universe text-xs ">Desires to obtain pain of itself, because it is pain, but<br></br>
                occasionally circumstances.</p>
                <div className=" mt-5 flex items-center gap-5 ">
                <p><FaTwitter className=" text-white h-[30px] w-[30px] "></FaTwitter></p>
                <p><AiFillFacebook className=" text-white h-[30px] w-[30px] "></AiFillFacebook></p>
                <p><FaLinkedin className=" text-white h-[30px] w-[30px] "></FaLinkedin></p>
                <p><FaSquareInstagram className=" text-white h-[30px] w-[30px] "></FaSquareInstagram></p>
                </div>
                </div>

                <div>
                <p className=" text-white text-2xl universe ">EXPLORE <span className=" text-xl font-bold text-yellow-500 ">-</span></p>
                <div className=" mt-5">
                <p className=" text-xl text-gray-300 ">About Company</p>
                <p className=" text-xl mt-3 text-gray-300 ">Meet the Team</p>
                <p className=" text-xl mt-3 text-gray-300 ">News & Media</p>
                <p className=" text-xl mt-3 text-gray-300 ">Our Projects</p>
                <p className=" text-xl mt-3 text-gray-300 ">Contact</p>
                </div>
                </div>


                <div>
                <p className=" text-white text-2xl universe ">CONTACT <span className=" text-xl font-bold text-yellow-500 ">-</span></p>
                <div className=" mt-5">
                <p className=" text-xl text-gray-300 ">66 Road Broklyn Street, 600<br></br>
                New York, USA</p>
                <div className=" mt-10">
                <div className=" flex items-center gap-2">
                <p><MdEmail className=" h-[30px] w-[30px] text-yellow-400 "></MdEmail></p>
                <p className=" text-xl text-gray-300 ">needhelp@company.com</p>
                </div>
                <div className=" flex items-center gap-2">
                <p><FaPhone className=" h-[30px] w-[30px] text-yellow-400 "></FaPhone></p>
                <p className=" mt-5 text-xl text-gray-300 ">needhelp@company.com</p>
                </div>
                </div>
                </div>
                </div>


                <div>
                <p className=" text-white text-2xl universe ">PROJECT <span className=" text-xl font-bold text-yellow-500 ">-</span></p>
                <div className=" mt-10 flex">
                <div className=" grid grid-cols-3 gap-5 ">
                <img className=" hover:border-[1px] border-yellow-300 h-[90px] w-[100px] " src="https://t4.ftcdn.net/jpg/05/57/30/45/360_F_557304508_4HiGABGRGUvzfS1XQkKYVmH45TGhUVOn.jpg" alt="" />
                <img className=" hover:border-[1px] border-yellow-300 h-[90px] w-[100px] " src="https://png.pngtree.com/thumb_back/fh260/background/20231001/pngtree-futuristic-3d-rendering-computer-screen-terminal-hacking-with-running-programming-code-image_13538011.png" alt="" />
                <img className=" hover:border-[1px] border-yellow-300 h-[90px] w-[100px] " src="https://png.pngtree.com/background/20240115/original/pngtree-3d-rendered-image-illustrating-the-concept-of-coding-and-programming-picture-image_7283662.jpg" alt="" />
                <img className=" hover:border-[1px] border-yellow-300 h-[90px] w-[100px] " src="https://wallpapersok.com/images/thumbnail/presenting-a-programming-code-m99h69rgpg3t5crq.webp" alt="" />
                <img className=" hover:border-[1px] border-yellow-300 h-[90px] w-[100px] " src="https://images.datacamp.com/image/upload/v1646560927/shutterstock_1329434768_bf9003ea47.jpg" alt="" />
                <img className=" hover:border-[1px] border-yellow-300 h-[90px] w-[100px] " src="https://st2.depositphotos.com/6485672/12333/i/450/depositphotos_123336054-Code-HTML-web-programming-background.jpg" alt="" />
                </div>
                </div>
                </div>


            </div>


            <div className=" mt-10 mb-10 ">
                <hr></hr>
            </div>

            <div>
                <p className=" text-center the text-xl text-gray-300 ">© Copyright reserved by kodesolution.com</p>
            </div>
            
        </div>
    );
};

export default Footer;

import { FaPeopleRoof } from "react-icons/fa6";

const Provide = () => {


    return (
        <div className=" mt-10 mb-10 ml-24 mr-24 ">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-10">

            <div className="  ">
            <img className=" h-[500px] w-[600px]  rounded-xl  " src="https://media.licdn.com/dms/image/v2/C561BAQF7LivwcMv9DQ/company-background_10000/company-background_10000/0/1583891737912?e=2147483647&v=beta&t=kTwoVvfOF7R-PVBmfiCw5unJO4AgV7x1q80hnszyQio" alt="" />
            </div>

            <div >
             <p className=" the font-semibold text-yellow-500 ">About The Company</p>
             <p className=" text-5xl font-semibold the mt-5 ">We provide the best IT<br></br>
             solutions services</p>
             <p className=" universe  mt-5 text-2xl text-yellow-500 font-semibold ">Making the easiest tech solution for you.</p>
             <p className=" mt-5  font-serif text-gray-500 ">Explain to you how all this mistaken denouncing pleasure<br></br> and praising pain was born and we will give you a complete <br></br>simply free text account of the system, and expound the actual teachings.</p>
             <div className=" mt-5 flex-col md:flex-row lg:flex-row flex items-center gap-10 ">
             <div className=" flex items-center gap-3">
             <img className=" h-[80px] " src="https://cdn-icons-png.flaticon.com/128/7991/7991055.png" alt="" />
             <p className=" -mb-3 text-xl font-semibold ">
             Website<br></br>Development</p>
             </div>
             <p className=" bg-gray-400 h-[80px] w-[1px] "></p>
             <div className=" flex items-center gap-3">
             <img className=" h-[80px] " src="https://cdn-icons-png.flaticon.com/128/8421/8421969.png" alt="" />
             <p className=" -mb-3 text-xl font-semibold ">
             Internal<br></br>
             networking</p>
             </div>
             </div>
             <div>
             <button className=" btn bg-yellow-500 mt-3 text-white universe ">DISCOVER MORE</button>
             </div>
            </div>
            </div>
            </div>
    );
};

export default Provide;
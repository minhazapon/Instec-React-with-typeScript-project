


const ContactForm = () => {

    return (
        <div className=" mt-20 mb-20 ml-24 mr-24">
            <div>



            <div>
            <p className="  text-yellow-500 font-semibold">SEND US EMAIL</p>
            <p className=" text-5xl font-extrabold mt-3 text-black ">FEEL FREE TO WRITE</p>
            <div className=" mt-5 flex justify-start">
            <form className="  ">
            <div className=" flex justify-center ">
            <div className=" grid   md:grid-cols-2 gap-5 ">
            <input className=" h-[50px] w-[300px] border-[1px] p-3 hover:border-[4px]  hover:border-blue-400 "
            placeholder="Enter Name" type="text" required />
            <input  className=" h-[50px] w-[300px] border-[1px] p-3 hover:border-[4px]  hover:border-blue-400 "
            type="email" name="email"  placeholder="Enter Email" id="" required />
            <input className=" h-[50px] w-[300px] border-[1px] p-3 hover:border-[4px]  hover:border-blue-400 "
            placeholder="Enter Subject" type="text" required />
            <input className=" h-[50px] w-[300px] border-[1px] p-3 hover:border-[4px]  hover:border-blue-400 "
            placeholder="Enter Phone" type="text" required />     
            </div>
            </div>
            <textarea className=" h-[200px] w-full mt-5 border-[1px] p-3 hover:border-[4px]  hover:border-blue-400 "
            placeholder="Drop Message" name="message" id="" required ></textarea>
            <div>
            <input className=" w-full bg-yellow-500 btn mt-5  " type="submit" value="Submit" />
            </div>
            </form>
            </div>
            </div>
            </div>

            {/* ---------------------------------------------------- */}




            
        </div>
    );
};

export default ContactForm;
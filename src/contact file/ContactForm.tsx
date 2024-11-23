
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsCursor } from "react-icons/bs";
import Swal from "sweetalert2";


const ContactForm = () => {


    const onSubmit = async (event: any) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: 'Contact Done!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          event.target.reset();
        } else {
            Swal.fire({
                title: 'Contact Done!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })  
          console.log("Error", data);
         
        }
      };


    

    return (
        <div className=" mt-20 mb-20 ml-24 mr-24 flex justify-center gap-10 flex-col md:flex-row lg:flex-row">


            <div className="">
            <div>
            <p className="  text-yellow-500 font-semibold">SEND US EMAIL</p>
            <p className=" text-5xl font-extrabold mt-3 text-black ">FEEL FREE TO WRITE</p>
            <div className=" mt-5 flex justify-start">
            <form onSubmit={onSubmit} className="  ">
            <div className=" flex justify-center ">
            <div className=" grid   md:grid-cols-2 gap-5 ">

            <input className=" h-[50px] w-[300px] border-[1px] p-3 hover:border-[4px]  hover:border-blue-400 "
            placeholder="Enter Name" type="text" name="name"
           
            required />

            <input  className=" h-[50px] w-[300px] border-[1px] p-3 hover:border-[4px]  hover:border-blue-400 "
            type="email"  placeholder="Enter Email" id="" name="email" required />

            <input className=" h-[50px] w-[300px] border-[1px] p-3 hover:border-[4px]  hover:border-blue-400 "
            placeholder="Enter Subject" type="text" name="subject"  required />

            <input className=" h-[50px] w-[300px] border-[1px] p-3 hover:border-[4px]  hover:border-blue-400 "
            placeholder="Enter Phone" type="text" name="phone" required />    

            </div>
            </div>

            <textarea className=" h-[200px] w-full mt-5 border-[1px] p-3 hover:border-[4px]  hover:border-blue-400 "
            placeholder="Drop Message" id="" name="message"   required ></textarea>

            <div>
            <input className=" w-full bg-yellow-500 btn mt-5  " type="submit" value="Submit" />
            </div>
            </form>
            </div>
            </div>
            </div>

            {/* ---------------------------------------------------- */}
            

            <div>
             <div>
             <p className="  text-yellow-500 font-semibold">NEED ANY HELP?</p>
             <p className=" text-4xl font-extrabold mt-3 text-black ">GET IN TOUCH WITH US</p>
             <p className=" mt-5 text-gray-400 ">Lorem ipsum is simply free text available dolor sit<br></br> amet, consectetur notted adipisicing elit sed do<br></br> eiusmod tempor incididunt simply <br></br>free ut labore et dolore magna aliqua.</p>
             </div>

             <div className=" mt-10 flex items-center gap-6 ">
              <div className="  bg-yellow-500 h-[80px] w-[80px] p-4 rounded-full ">
                <p><FaPhone className=" h-[50px] w-[50px] "></FaPhone></p>
              </div>
              <div>
               <p className=" text-xl text-black font-semibold ">Have any question?</p>
               <p className=" text-xl text-gray-400 mt-5 ">Free +92 (020)-9850</p>
              </div>
             </div>

             <div className=" mt-5 flex items-center gap-6 ">
              <div className="  bg-yellow-500 h-[80px] w-[80px] p-4 rounded-full ">
                <p><MdOutlineMail className=" h-[50px] w-[50px] "></MdOutlineMail></p>
              </div>
              <div>
               <p className=" text-xl text-black font-semibold ">Write email</p>
               <p className=" text-xl text-gray-400 mt-5 ">needhelp@company.com</p>
              </div>
             </div>

             <div className=" mt-5 flex items-center gap-6 ">
              <div className="  bg-yellow-500 h-[80px] w-[80px] p-4 rounded-full ">
                <p><BsCursor className=" h-[50px] w-[50px] "></BsCursor></p>
              </div>
              <div>
               <p className=" text-xl text-black font-semibold ">Visit anytime</p>
               <p className=" text-xl text-gray-400 mt-5 ">66 broklyn golden street. New York</p>
              </div>
             </div>
            </div>



            
        </div>
    );
};

export default ContactForm;
import Marquee from "react-fast-marquee";


const InfoCard = () => {


    return (

        <div>

            <div className=" mt-10 mb-10 ml-24 mr-24 ">

                <div className=" flex justify-center">

                 <div className=" grid  md:grid-cols-3 gap-10 ">
                   

                 <div className="card bg-base-100 image-full w-96 shadow-xl">
                   <figure>
                     <img
                       src="https://miro.medium.com/v2/resize:fit:1400/1*OKZOTd6X0Sx-sy2GJyldTw.jpeg"
                       alt="Shoes" />
                   </figure>
                   <div className="card-body">
                     <img className=" h-[60px] w-[70px] " src="https://cdn-icons-png.flaticon.com/128/15264/15264418.png" alt="" />
                     <p className=" the ">Perfect solutions
                     that business demands</p>
                     <div className="card-actions justify-end">
                       <button className="btn  bg-yellow-500 the text-white  ">DETAILS</button>
                     </div>
                   </div>
                 </div>

                 <div className="card bg-base-100 image-full w-96 shadow-xl">
                   <figure>
                     <img
                       src="https://www.viasion.com/wp-content/uploads/2024/08/IC-programming-1.jpg"
                       alt="Shoes" />
                   </figure>
                   <div className="card-body">
                     <img className=" h-[60px] w-[60px] " src="https://cdn-icons-png.flaticon.com/128/5979/5979577.png" alt="" />
                     <p className=" the ">Choose the best
                     IT service company</p>
                     <div className="card-actions justify-end">
                       <button className="btn  bg-yellow-500 the text-white  ">DETAILS</button>
                     </div>
                   </div>
                 </div>

                 <div className="card bg-base-100 image-full w-96 shadow-xl">
                   <figure>
                     <img
                       src="https://parallelstaff.com/wp-content/smush-webp/2024/06/Decoding-Tech-Trends-Exploring-the-Most-Popular-Programming-Languages1-1024x536.png.webp"
                       alt="Shoes" />
                   </figure>
                   <div className="card-body">
                     <img className=" h-[60px] w-[60px] " src="https://cdn-icons-png.flaticon.com/128/10061/10061767.png" alt="" />
                     <p className=" the ">We know how to
                     make a technology</p>
                     <div className="card-actions justify-end">
                       <button className="btn  bg-yellow-500 the text-white  ">DETAILS</button>
                     </div>
                   </div>
                 </div>
                 </div>
                 </div>



                <div className=" mt-10 ">
                    
                <div className="flex border-2 border-black  overflow-hidden max-w-md mx-auto font-[sans-serif]">
                <input type="email" placeholder="Digital agency services built specifically for your business."
                className=" w-full outline-none bg-white text-bg-black  text-sm px-4 py-3" />
                <button type='button' className="  flex items-center justify-center bg-black p-3 text-sm text-white">
                DISCOVERMORE
                </button>
                </div>
                </div>
                </div>
                <div className=" bg-yellow-500 p-5 ">
                <div className=" flex justify-center">
                <Marquee>


                    <div className=" grid  md:grid-cols-4 gap-5 ">
                    <div>
                    <p className=" text-xl ">*INSPIRED WITH CREATIVITY</p>
                    </div>
                    <div>
                    <p className=" text-xl ">*UNLOCK THE POTENTIAL</p>
                    </div>
                    <div>
                    <p className=" text-xl ">*TRANSFORM IDEA INTO REALITY</p>
                    </div>
                    <div>
                    <p className=" text-xl ">*DESIGN & DEVELOPMENT CRAFT</p>
                    </div>
                    </div>
                  
                </Marquee>
                </div>
                </div>
                </div>
        
    );
};

export default InfoCard;
import { useState } from "react";


const Searching = () => {
    

    const [query, setQuery] = useState("");



    const data = [ "javascript", 'react', 'next.js', 'redux', 'mongodb', 'express.js' ] 


    const filterData = data.filter( item => 

        item.toLowerCase().includes(query.toLowerCase())

    );


    return (
        <div className=" mb-40 mt-10  ml-24 mr-24 ">
           

           <div>

           <input 
            className=" h-[50px] w-full p-5 border-[1px] "
            type="search" name="search" 
            placeholder="serach"
            value={query}
            onChange={ (e) => setQuery(e.target.value) }
           id="" />
           <ul>
           <ul className=" grid grid-cols-3">


           {filterData.map((item, index) => (
             <li key={index}>{item}</li>
            ))}


            </ul>
           </ul>


           </div>


            
        </div>
    );
};

export default Searching;
import { useQuery } from "@tanstack/react-query";
import ShopDetails from "./ShopDetails";



const Shop = () => {
     
    const { data: query }: any = useQuery({

        queryKey: ['query'],
        queryFn: async () =>{
 
            const res = await fetch('https://raw.githubusercontent.com/minhazapon/Instec-React-with-typeScript-project/refs/heads/main/public/shop.json')
            return res.json()
 
        }
     })

    return (
        <div className=" mt-14 mb-14 ml-24 mr-24 ">
              
             <div>
                <p className=" text-center universe text-5xl text-black ">Instec Products</p>
             </div> 

            <div className=" flex justify-center mt-10">
                 
           
              <div className=" grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-10">

                
                {

                    query?.map( query =>  <ShopDetails query={query} ></ShopDetails> )

                }


              </div>


            </div>


            
        </div>
    );
};

export default Shop;
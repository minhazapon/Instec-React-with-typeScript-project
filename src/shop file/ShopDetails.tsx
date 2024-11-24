


const ShopDetails = ( props: { query: any } ) => {
    
    const {image, title, price} = props.query

    return (
        <div>


                <div className="card bg-base-100 w-[320px] hover:border-[2px] border-yellow-600 shadow-xl">
                  <figure>
                    <img
                      src={image}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title the "> {title} </h2>
                    <p className=" text-xl text-gray-400 universe "> {price} </p>
                    <div className="card-actions justify-end">
                    <div className="rating">
                      <input placeholder="Rating" type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                      <input placeholder="Rating" type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                      <input placeholder="Rating" type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                      <input placeholder="Rating" type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                      <input placeholder="Rating" type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                    </div>
                  </div>
                </div>
            
        </div>
    );
};

export default ShopDetails;
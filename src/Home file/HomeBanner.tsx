

const HomeBanner = () => {


    return (
        <div className=" mb-10  ">

            <div
            className="hero min-h-screen  flex-col md:flex-row lg:flex-row "
            style={{
              backgroundImage: "url(https://images7.alphacoders.com/133/1337527.png)",
            }}>
            <div className="hero-overlay bg-opacity-80 "></div>
            <div className="hero-content ">
            <div className="">
            <p className=" tech text-white mb-10 text-2xl ">Solution For Your All It Problems</p>    
            <h1 className="mb-5 text-5xl font-bold tech  text-white">IT SOLUTION & SERVICE</h1>
            <button className="btn  bg-yellow-500 text-white ">DISCOVER MORE</button>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default HomeBanner;
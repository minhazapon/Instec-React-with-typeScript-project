import HomeBanner from "./Home file/HomeBanner";
import InfoCard from "./Home file/InfoCard";
import Memberz from "./Home file/Memberz";
import Provide from "./Home file/Provide";
import Service from "./Home file/Service";
import Technology from "./Home file/Technology";

const Home = () => {

    return (

        <div>

              <HomeBanner></HomeBanner>
              <Provide></Provide>
              <InfoCard></InfoCard>
              <Technology></Technology>
              <Memberz></Memberz>
              <Service></Service>
            
        </div>
    );
};

export default Home;
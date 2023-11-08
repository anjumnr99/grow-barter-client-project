import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import PopularServices from "./PopulerServices/PopularServices";
import Experience from "../../Components/Experience";
import FnQ from "../../Components/FnQ";
import Offer from "../../Components/Offer";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Grow Barter | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <Offer></Offer>
            <Experience></Experience>
            <FnQ></FnQ>
        </div>
    );
};

export default Home;
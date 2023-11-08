import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import PopularServices from "./PopulerServices/PopularServices";
import Experience from "../../Components/Experience";
import FnQ from "../../Components/FnQ";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Grow Barter | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <Experience></Experience>
            <FnQ></FnQ>
        </div>
    );
};

export default Home;
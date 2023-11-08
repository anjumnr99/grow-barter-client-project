import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import PopularServices from "./PopulerServices/PopularServices";
import Experience from "../../Components/Experience";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Grow Barter | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <Experience></Experience>
        </div>
    );
};

export default Home;
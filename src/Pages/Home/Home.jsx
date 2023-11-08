import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import PopularServices from "./PopulerServices/PopularServices";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Grow Barter | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;
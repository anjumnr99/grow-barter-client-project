import { Carousel } from 'flowbite-react';
import video from '../assets/video (720p).mp4'
import video1 from '../assets/video-2.mp4'
import video2 from '../assets/Viedo-3.mp4';

const Banner = () => {
    const items = [video, video1, video2];
    const breakPoints = [
        { width: 1, itemsToShow: 1 },

    ];
    return (
        <div>
            <div className='hero h-[90vh] hero-overlay bg-opacity-70 overflow-hidden   relative '>

                <Carousel
                showArrows
                enableAutoPlay
                 breakPoints={breakPoints}>
                    {items.map((item) => (
                        <items key={item}>
                            <video className='w-full  bg-black bg-opacity-5 block h-full object-cover ' playsInline autoPlay muted loop  >
                                <source src={item} type='video/mp4' />
                            </video>
                        </items>
                    ))}
                </Carousel>

{/* Taste the homesteader’s lifestyle and discover the regenerative benefits of living from the ground up */}
                <div className="hero-content text-center  mx-3 md:mx-4 absolute border-green-600 w-fit border-4 rounded-xl   ">
                    <div className="max-w-4xl  md:p-4 lg:p-8 ">
                        <h1 className="text-3xl text-red-800 md:text-4xl lg:text-5xl font-bold">Grow Barter </h1>
                        <p className=" p-3 text-yellow-300 text-xl  md:text-4xl lg:text-5xl font-bold md:py-4 lg:py-6"> How you live matters.</p>
                        <p className='text-xl font-bold'>Taste the homesteader’s lifestyle and discover the regenerative benefits of living from the ground up</p>
                        {/* <button className="btn bg-green-700 border-none text-white hover:bg-green-800 ">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

import video from '../assets/video (720p).mp4'


const Banner = () => {
    return (
        <div>
            <div className='hero h-[90vh] overflow-hidden   relative '>
                <video className='w-full block h-full object-cover ' playsInline autoPlay muted loop  >
                    <source src={video} type='video/mp4' />
                </video>

                <div className="hero-content text-center  mx-3 md:mx-4 absolute w-fit border-2 rounded-xl   ">
                    <div className="max-w-4xl  md:p-4 lg:p-8 ">
                        <h1 className="text-2xl text-white md:text-3xl lg:text-5xl font-bold">Hello there</h1>
                        <p className=" p-3 text-white md:py-4 lg:py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

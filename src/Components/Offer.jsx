

const Offer = () => {


    return (

        <div className="dark:dark:bg-gray-800  dark:dark:text-gray-50">

            {/* <div className=" relative  mx-auto dark:dark:bg-gray-900">
            <div className="  " >
                    <img className=" h-96 opacity-80 block w-full" src="https://i.ibb.co/qF7m1d5/Honey-Exchange.jpg" alt="" />
                </div>
            <div className="flex absolute top-0 max-w-xl flex-col sm:space-y-5 p-6 ">
               
                <h1 className=" text-5xl sm:text-6xl text-gray-900  font-semibold">Limited Offer</h1>
                <p className="text-4xl sm:text-5xl text-gray-900">Get 20% Discount</p>
                <p className="text-gray-900">Explore the nectar of your community with our Honey Exchange service. Connect with local beekeepers who produce honey from the blossoms of your region. You'll not only enjoy the distinct flavors of locally sourced honey but also support the crucial work of our buzzing friends. </p>
                <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 font-bold text-gray-900 text-xl dark:dark:text-violet-400">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>

            </div>
        </div> */}

            <section className="p-4 lg:p-8 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.ibb.co/qF7m1d5/Honey-Exchange.jpg" alt="" className="h-80 dark:dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:dark:bg-gray-900">
                            <h1 className=" text-3xl font-bold  text-gray-900  ">Limited Offer</h1>
                            <p className="text-3xl font-bold  text-gray-900">Get 20% Discount</p>
                            <p className="my-6 dark:dark:text-gray-400">Explore the nectar of your community with our Honey Exchange service. Connect with local beekeepers who produce honey from the blossoms of your region.  </p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 font-bold text-gray-900 text-xl dark:dark:text-violet-400">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                   
                </div>
            </section>
        </div>

    );
};

export default Offer;
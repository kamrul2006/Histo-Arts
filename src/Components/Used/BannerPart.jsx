import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const BannerPart = () => {
    return (
        <div>
            <div className="h-56  md:h-screen">
                <Carousel>
                    <div className="h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('https://img.pikbest.com/ai/illus_our/20230424/b71273aaceb28da7f1bb1ce73dd52cd9.jpg!w700wp')` }}>
                        <div className="h-full w-full bg-black/50 flex flex-col items-center justify-center text-white md:space-y-6">

                            <h1 className="text-xl md:text-5xl font-black font-serif">
                                Welcome to K-HistoArts
                            </h1>

                            <p className="text-center">
                                Welcome to K-HistoArts. Here you can see many historical artifacts and many more information about it. <br /> So let us explore more about our History.
                            </p>

                            <Link to={'/All-Crafts'}><Button pill gradientDuoTone="purpleToPink"><p className="text-xl px-5">Explore More</p></Button></Link>

                        </div>
                    </div>


                    <div className="h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('https://i.natgeofe.com/n/84ad60f7-07a7-4e82-93bb-b71cdb77942c/NationalGeographic_2726355.jpg')` }}>
                        <div className="h-full w-full bg-black/50 flex flex-col items-center justify-center text-white md:space-y-6">


                            <h1 className="text-xl md:text-5xl font-black font-serif">
                                You can get The information you need.
                            </h1>

                            <p className="text-center">
                                We and sure all the correct information you wants to know about the  artefact. <br /> We are happy to provide you all the information.
                            </p>

                            <Link to={'/All-Crafts'}><Button pill gradientDuoTone="purpleToBlue"><p className="text-xl px-5">Explore More</p></Button></Link>

                        </div>
                    </div>


                    <div className="h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('https://i.pinimg.com/736x/d5/31/c2/d531c2b68560283beb81cbfbc2212e3c.jpg')` }}>
                        <div className="h-full w-full bg-black/50 flex flex-col items-center justify-center text-white md:space-y-6">


                            <h1 className="text-xl md:text-5xl font-black font-serif">
                                You can Add Information For Other.
                            </h1>

                            <p className="text-center">
                                Here you can read, you can add any historical artifacts<br /> or you know about other artefact.
                            </p>

                            <Link to={'/Add-Craft'}><Button pill gradientDuoTone="pinkToOrange"><p className="text-xl px-5">Add Information</p></Button></Link>

                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    );
};

export default BannerPart;
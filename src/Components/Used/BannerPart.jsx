import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const BannerPart = () => {
    return (
        <div>
            <div className="h-56  md:h-[550px]">
                <Carousel>
                    <div className="h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('https://img.pikbest.com/ai/illus_our/20230424/b71273aaceb28da7f1bb1ce73dd52cd9.jpg!w700wp')` }}>
                        <div className="h-full w-full bg-black/50 flex flex-col items-center justify-center text-white md:space-y-6 space-y-2">

                            <Zoom>
                                <h1 className="text-xl md:text-5xl font-black font-serif">
                                    Welcome to K-HistoArts
                                </h1>
                            </Zoom>

                            <p className="text-center text-xs md:text-base">
                                Welcome to K-HistoArts. Here you can see many historical artifacts and many more information about it. <br /> So let us explore more about our History.
                            </p>

                            <Slide direction="up">
                                <Link to={'/All-Crafts'}><Button pill gradientDuoTone="purpleToPink"><p className="md:text-xl text-base px-5">Explore More</p></Button></Link>
                            </Slide>

                        </div>
                    </div>


                    <div className="h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('https://i.natgeofe.com/n/84ad60f7-07a7-4e82-93bb-b71cdb77942c/NationalGeographic_2726355.jpg')` }}>
                        <div className="h-full w-full bg-black/50 flex flex-col items-center justify-center text-white md:space-y-6 space-y-2">

                            <Fade duration={2000}>
                                <h1 className="text-xl md:text-5xl font-black font-serif">
                                    You can get The information you need.
                                </h1>
                            </Fade>
                            <p className="text-center text-xs md:text-base">
                                We and sure all the correct information you wants to know about the  artefact. <br /> We are happy to provide you all the information.
                            </p>

                            <Slide direction="up">
                                <Link to={'/All-Crafts'}><Button pill gradientDuoTone="purpleToBlue"><p className="md:text-xl text-base px-5">Explore More</p></Button></Link>
                            </Slide>

                        </div>
                    </div>


                    <div className="h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('https://i.pinimg.com/736x/d5/31/c2/d531c2b68560283beb81cbfbc2212e3c.jpg')` }}>
                        <div className="h-full w-full bg-black/50 flex flex-col items-center justify-center text-white md:space-y-6 space-y-2">

                            <Zoom duration={1500}>
                                <h1 className="text-xl md:text-5xl font-black font-serif">
                                    You can Add Information For Other.
                                </h1>
                            </Zoom>

                            <p className="text-center text-xs md:text-base">
                                Here you can read, you can add any historical artifacts<br /> or you know about other artefact.
                            </p>

                            <Slide direction="up">
                                <Link to={'/Add-Craft'}><Button pill gradientDuoTone="pinkToOrange"><p className="md:text-xl text-base px-5">Add Information</p></Button></Link>
                            </Slide>

                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    );
};

export default BannerPart;
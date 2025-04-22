import { Carousel, Button } from "flowbite-react";
import { Zoom, Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const slides = [
    {
        image: "https://png.pngtree.com/thumb_back/fh260/background/20241014/pngtree-the-colosseum-a-timeless-icon-on-world-map-historic-set-against-image_16385500.jpg",
        title: "Welcome to K-HistoArts",
        description:
            "Here you can discover historical artifacts and many more stories behind them. Let’s dive into the richness of our past.",
        buttonText: "Explore More",
        buttonLink: "/All-Crafts",
        buttonTone: "purpleToPink",
        animation: <Zoom><h1 className="text-xl md:text-5xl font-black font-serif drop-shadow-xl">Welcome to K-HistoArts</h1></Zoom>,
    },
    {
        image: "https://i.natgeofe.com/n/84ad60f7-07a7-4e82-93bb-b71cdb77942c/NationalGeographic_2726355.jpg",
        title: "You can get the information you need.",
        description:
            "We provide accurate and detailed data on each artifact. Explore and learn everything you need to know.",
        buttonText: "Explore More",
        buttonLink: "/All-Crafts",
        buttonTone: "purpleToBlue",
        animation: <Fade duration={2000}><h1 className="text-xl md:text-5xl font-black font-serif drop-shadow-xl">You can get the information you need.</h1></Fade>,
    },
    {
        image: "https://i.pinimg.com/736x/d5/31/c2/d531c2b68560283beb81cbfbc2212e3c.jpg",
        title: "You can Add Information For Others.",
        description:
            "Want to contribute? Add your own discoveries and help build a treasure of history for all.",
        buttonText: "Add Information",
        buttonLink: "/Add-Craft",
        buttonTone: "pinkToOrange",
        animation: <Zoom duration={1500}><h1 className="text-xl md:text-5xl font-black font-serif drop-shadow-xl">You can Add Information For Others.</h1></Zoom>,
    },
];

const BannerPart = () => {
    return (
        <div className="h-56 md:h-[550px] lg:mt-10 mt-0">
            <Carousel slideInterval={5000} indicators={true}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                        <div className="h-full w-full bg-black/50 flex flex-col items-center justify-center text-white text-center px-4 md:px-20 py-6 md:space-y-6 space-y-2">
                            {slide.animation}

                            <p className="text-xs md:text-base font-medium leading-relaxed max-w-2xl drop-shadow">
                                {slide.description}
                            </p>

                            <Slide direction="up">
                                <Link to={slide.buttonLink}>
                                    <Button pill gradientDuoTone={slide.buttonTone}>
                                        <p className="md:text-lg text-base px-5 font-semibold">
                                            {slide.buttonText}
                                        </p>
                                    </Button>
                                </Link>
                            </Slide>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default BannerPart;

import { useState } from "react";
import { Fade, JackInTheBox, Zoom } from "react-awesome-reveal";
import pic from '../../assets/les.png';

const DidYouKnow = () => {
    const facts = [
        { icon: "📜", fact: "The Rosetta Stone was the key to deciphering ancient Egyptian hieroglyphs." },
        { icon: "⚔️", fact: "Viking swords were so advanced that they were often passed down through generations." },
        { icon: "🔭", fact: "The first telescopes were used not for stargazing but for military purposes." },
        { icon: "🛡️", fact: "Roman shields were designed to interlock, creating an impenetrable wall." },
        { icon: "🏺", fact: "The oldest pottery in the world, dating back to 20,000 years ago, was discovered in China." },
        { icon: "🏰", fact: "The Great Wall of China is not a single wall but a series of walls and fortifications built over centuries." },
        { icon: "⛩️", fact: "Samurai warriors in Japan followed a strict code of honor known as Bushido." },
        { icon: "🔑", fact: "King Tutankhamun's tomb contained over 5,000 artifacts, including his famous golden mask." },
        { icon: "🗿", fact: "The Easter Island statues, known as Moai, were carved by the Rapa Nui people between 1250 and 1500 AD." },
        { icon: "🌍", fact: "The oldest map in the world is a Babylonian clay tablet dating back to 600 BC." },
        { icon: "⚓", fact: "The Titanic was carrying over 3,000 bags of mail when it sank in 1912." },
        { icon: "🕰️", fact: "Stonehenge, built over 4,000 years ago, is aligned with the movements of the sun." },
        { icon: "📖", fact: "The Epic of Gilgamesh, written in 2100 BC, is one of the earliest works of literature." },
        { icon: "⚒️", fact: "The Bronze Age saw the first use of alloys to create stronger tools and weapons." },
        { icon: "🚢", fact: "The oldest known shipwreck, the Dokos wreck, dates back to 2700 BC." },
        { icon: "🏺", fact: "The oldest pottery in the world, dating back to 20,000 years ago, was discovered in China." },
    ];

    const [showAll, setShowAll] = useState(false);

    const visibleFacts = showAll ? facts : facts.slice(0, 6);

    return (
        <section className=" py-10 grid grid-cols-1 md:grid-cols-5 gap-6 border-y-4">
            <div className="py-5 md:py-10 col-span-5 text-center">
                <Zoom duration={1600}>
                    <h2 className="text-4xl  font-serif font-extrabold mb-3">
                        Did You Know These Digital History Facts?
                    </h2>
                </Zoom>

                <Fade>
                    <p className="text-gray-600 text-lg italic md:px-24 px-6 mt-3">
                        Explore these fascinating historical facts in a digital world.
                        Click on the <span className="text-pink-400 hover:underline cursor-pointer" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less Facts" : "Show All Facts"}</span> button to uncover more.
                    </p>
                </Fade>
            </div>

            <div className="col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 mt-5">
                    <JackInTheBox>
                        {visibleFacts.map((item, index) => (
                            <div key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-black/35 p-5 rounded-lg shadow-lg hover:bg-gradient-to-r from-pink-500 to-yellow-500 text-yellow-300 border-2 border-transparent hover:border-pink-400 ">
                                <div className="flex items-start space-x-4 h-[100px] justify-center">
                                    <span className="text-5xl">{item.icon}</span>
                                    <p className="text-lg text-white">{item.fact}</p>
                                </div>
                            </div>
                        ))}
                    </JackInTheBox>
                </div>

                <div className="text-center mt-8 py-6">
                    <Fade duration={1500}>
                        <button
                            className={`btn ${showAll ? "btn-error" : "btn-warning"} rounded-full text-xl py-2 px-8 shadow-xl hover:shadow-2xl transform transition-all duration-500`}
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less Facts" : "Show All Facts"}
                        </button>
                    </Fade>

                    <p className="mt-6 text-left font-semibold text-lg italic opacity-20 text-gray-400">Displayed by <span className="font-serif text-xl">K-HistoArts</span></p>
                </div>
            </div>

            <div className="col-span-1 hidden md:flex items-center justify-center sticky top-8">
                <img src={pic} className="w-80 h-auto rounded-lg  transform transition-all duration-500 hover:scale-105 " />
            </div>
        </section>
    );
};

export default DidYouKnow;

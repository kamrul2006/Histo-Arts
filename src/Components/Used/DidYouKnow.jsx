import { useState } from "react";
import { Fade, JackInTheBox, Zoom } from "react-awesome-reveal";

const DidYouKnow = () => {
    const facts = [
        {
            icon: "📜",
            fact: "The Rosetta Stone was the key to deciphering ancient Egyptian hieroglyphs.",
        },
        {
            icon: "⚔️",
            fact: "Viking swords were so advanced that they were often passed down through generations.",
        },
        {
            icon: "🔭",
            fact: "The first telescopes were used not for stargazing but for military purposes.",
        },
        {
            icon: "🛡️",
            fact: "Roman shields were designed to interlock, creating an impenetrable wall.",
        },
        {
            icon: "🏺",
            fact: "The oldest pottery in the world, dating back to 20,000 years ago, was discovered in China.",
        },
        {
            icon: "🏰",
            fact: "The Great Wall of China is not a single wall but a series of walls and fortifications built over centuries.",
        },
        {
            icon: "⛩️",
            fact: "Samurai warriors in Japan followed a strict code of honor known as Bushido.",
        },
        {
            icon: "🔑",
            fact: "King Tutankhamun's tomb contained over 5,000 artifacts, including his famous golden mask.",
        },
        {
            icon: "🗿",
            fact: "The Easter Island statues, known as Moai, were carved by the Rapa Nui people between 1250 and 1500 AD.",
        },
        {
            icon: "🌍",
            fact: "The oldest map in the world is a Babylonian clay tablet dating back to 600 BC.",
        },
        {
            icon: "⚓",
            fact: "The Titanic was carrying over 3,000 bags of mail when it sank in 1912.",
        },
        {
            icon: "🕰️",
            fact: "Stonehenge, built over 4,000 years ago, is aligned with the movements of the sun.",
        },
        {
            icon: "📖",
            fact: "The Epic of Gilgamesh, written in 2100 BC, is one of the earliest works of literature.",
        },
        {
            icon: "⚒️",
            fact: "The Bronze Age saw the first use of alloys to create stronger tools and weapons.",
        },
        {
            icon: "🚢",
            fact: "The oldest known shipwreck, the Dokos wreck, dates back to 2700 BC.",
        },
    ];

    const [showAll, setShowAll] = useState(false);


    const visibleFacts = showAll ? facts : facts.slice(0, 6);

    return (
        <section className="bg-blue-50 py-10">
            <div className=" py-5 md:py-10">

                <Zoom duration={1600}>
                    <h2 className="md:text-4xl text-2xl font-serif font-bold text-center mb-2">Did You Know About this facts of our History ?
                    </h2>
                </Zoom>

                <Fade>
                    <p className="text-center text-gray-500 font-semibold italic">
                        Here are some unknown fact about aor history. <br /> You will smile after knowing this facts. Click on the <span className={`text-purple-700 hover:underline`} onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less Facts" : "Show All Facts"}</span> Button to read all the fun facts about our history,
                    </p>
                </Fade>


            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 mt-5">

                <JackInTheBox>
                    {visibleFacts.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start bg-yellow-100 p-4 rounded-lg shadow-md h-[120px]"
                        >
                            <span className="text-4xl mr-4">{item.icon}</span>
                            <p className="text-lg text-gray-700">{item.fact}</p>
                        </div>
                    ))}
                </JackInTheBox>
            </div>


            <div className="text-center mt-6 py-5 ">
                <Fade duration={1500}>
                    <button
                        className={`btn ${showAll ? "btn-info" : "btn-warning"} rounded-full text-xl shadow-md shadow-black`}
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less Facts" : "Show All Facts"}
                    </button>
                </Fade>

                <p className="text-right px-4 font-semibold text-lg italic opacity-20">  Displayed by <span className="font-serif text-xl">K-HistoArts</span></p>
            </div>

           

        </section>
    );
};

export default DidYouKnow;

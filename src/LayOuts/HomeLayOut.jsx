import { useEffect } from "react";
import BannerPart from "../Components/Used/BannerPart";
import FeaturedArtifacts from "../Components/Used/FeaturedArtifacts";
import DidYouKnow from "../Components/Used/DidYouKnow";
import AboutUs from "../Components/Used/AboutUs";
import HistoryQuizGame from "../Components/Used/HistoryGames";

const HomeLayOut = () => {
    useEffect(() => {
        document.title = "K-HistoArts || Home"
    }, [])

    return (
        <div className="bg-gradient-to-r from-amber-50 to-yellow-100">

            <BannerPart />

            <FeaturedArtifacts />

            <DidYouKnow />

            <HistoryQuizGame />

            <AboutUs />
        </div>
    );
};

export default HomeLayOut;
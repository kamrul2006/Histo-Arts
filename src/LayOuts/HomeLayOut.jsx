import { useEffect } from "react";
import BannerPart from "../Components/Used/BannerPart";
import FeaturedArtifacts from "../Components/Used/FeaturedArtifacts";
import DidYouKnow from "../Components/Used/DidYouKnow";
import AboutUs from "../Components/Used/AboutUs";

const HomeLayOut = () => {
    useEffect(() => {
        document.title = "K-HistoArts || Home"
    }, [])

    return (
        <div>

            <BannerPart />

            <FeaturedArtifacts />

            <DidYouKnow />

            <AboutUs/>
        </div>
    );
};

export default HomeLayOut;
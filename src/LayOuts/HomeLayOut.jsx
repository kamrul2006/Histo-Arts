import { useEffect } from "react";
import BannerPart from "../Components/Used/BannerPart";
import FeaturedArtifacts from "../Components/Used/FeaturedArtifacts";
import DidYouKnow from "../Components/Used/DidYouKnow";

const HomeLayOut = () => {
    useEffect(() => {
        document.title = "K-HistoArts || Home"
    }, [])

    return (
        <div>

            <BannerPart />

            <FeaturedArtifacts />

            <DidYouKnow />
        </div>
    );
};

export default HomeLayOut;
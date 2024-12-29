import { useEffect } from "react";
import BannerPart from "../Components/Used/BannerPart";
import FeaturedArtifacts from "../Components/Used/FeaturedArtifacts";

const HomeLayOut = () => {
    useEffect(() => {
        document.title = "K-HistoArts || Home"
    }, [])

    return (
        <div>

            <BannerPart />

            <FeaturedArtifacts />

        </div>
    );
};

export default HomeLayOut;
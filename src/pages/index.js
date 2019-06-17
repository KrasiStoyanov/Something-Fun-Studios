import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";
import StrengthsSection from "../components/home/strengths";
import AboutUsSection from "../components/home/aboutUs";
import BestHighlightsSection from "../components/home/bestHighlights";
import FeaturedGamesSection from "../components/home/featuredGames";
import BestCapturesSection from "../components/home/bestCaptures";
import TheTeam from "../components/home/theTeam";

const IndexPage = () => {
    return (
        <Layout headerClass="height-100 d-flex flex-column" isHome={true}>
            <Head title="Home" />
            <StrengthsSection />
            <AboutUsSection />
            <BestHighlightsSection />
            <FeaturedGamesSection />
            <BestCapturesSection />
            <TheTeam />
        </Layout>
    );
};

export default IndexPage;

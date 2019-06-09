import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";
import uniqueIdeas from "../images/unique-ideas.svg";
import pureDevotion from "../images/pure-devotion.svg";

const strengths = [
    {
        heading: "Unique ideas",
        description: "Some my argue, but many consider us an “idea factory”.",
        image: uniqueIdeas,
    },
    {
        heading: "Pure devotion",
        description:
            "If it weren’t for our devotion, we wouldn’t have made it here.",
        image: pureDevotion,
    },
    {
        heading: "Unique ideas",
        description: "Some my argue, but many consider us an “idea factory”.",
        image: uniqueIdeas,
    },
    {
        heading: "Pure devotion",
        description:
            "If it weren’t for our devotion, we wouldn’t have made it here.",
        image: pureDevotion,
    },
];

const IndexPage = () => {
    return (
        <Layout headerClass="height-100 d-flex flex-column" isHome={true}>
            <Head title="Home" />
            <section className="section section-sm bg-dark text-white text-center pt-5 pb-5 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        {strengths.map(s => (
                            <div className="strength col-lg-3 col-md-6 col-sm-12">
                                <img
                                    className="image mb-3"
                                    src={s.image}
                                    alt={s.heading}
                                />
                                <h5 className="font-weight-bold pt-1 mb-2">
                                    {s.heading}
                                </h5>
                                <p className="description text-light pt-1 mb-0">
                                    {s.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Layout>
    );
};

export default IndexPage;

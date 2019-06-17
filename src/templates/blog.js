import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DiscussionEmbed } from "disqus-react";

import Layout from "../components/layout";
import Head from "../components/head";

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
            slug
        }
    }
`;

const Blog = props => {
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                const alt = node.data.target.fields.title["en-US"];
                const url = node.data.target.fields.file["en-US"].url;

                return <img alt={alt} src={url} />;
            },
        },
    };

    const disqusConfig = {
        identifier: props.data.contentfulBlogPost.slug,
        title: props.data.contentfulBlogPost.title,
    };

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(
                props.data.contentfulBlogPost.body.json,
                options
            )}
            <DiscussionEmbed
                shortname="somethingfunstudio"
                config={disqusConfig}
            />
        </Layout>
    );
};

export default Blog;

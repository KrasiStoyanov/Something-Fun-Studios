import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const DevLogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost ( sort: {
				fields: publishedDate,
				order: DESC
			}) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`);

    return (
		<Layout>
			<Head title="Dev Log" />
            <h1>Dev Log</h1>
			<ol>
				{data.allContentfulBlogPost.edges.map((edge) => {
					return (
						<li>
							<Link to={`/blog/${edge.node.slug}`}>
								<h2>{edge.node.title}</h2>
							</Link>
							<p>{edge.node.publishedDate}</p>
						</li>
					);
				})}
			</ol>
		</Layout>
    );
};

export default DevLogPage;
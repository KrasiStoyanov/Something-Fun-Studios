import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
	return (
		<Layout>
			<Head title="Home" />
			<h1>Hello World</h1>
			<Link to="/contact">Contact us</Link>
		</Layout>
	);
};

export default IndexPage;
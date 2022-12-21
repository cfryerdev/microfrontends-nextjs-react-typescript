import React, { useContext } from "react";
import Layout from "./components/layout";

const Application = () => {
	return (
		<Layout>
			<ol className="breadcrumb">
				<li className="breadcrumb-item">Home</li>
				<li className="breadcrumb-item active">Profile</li>
			</ol>
			<h2>Remote App - Profile</h2>
			<p>This is the profile remote application.</p>
		</Layout>
	);
};

export default Application;

import React from "react";
import Layout from "../app/layout";

// @ts-ignore
//const HomeRemote = React.lazy(() => import("remote_home/Application"));

import dynamic from "next/dynamic";
/*const DashboardRemote = dynamic(() => import('remote_dashboard/Application'), {
  ssr: false,
});*/

const HomePage = () => (
	<Layout>
		<div />
	</Layout>
);

export default HomePage;

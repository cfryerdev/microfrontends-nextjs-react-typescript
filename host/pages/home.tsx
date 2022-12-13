import React from "react";
import Layout from "../app/layout";

// @ts-ignore
//const HomeRemote = React.lazy(() => import("remote_home/Application"));

import dynamic from 'next/dynamic';
const HomeRemote = dynamic(() => import('remote_home/Application'), {
  ssr: false,
});

const HomePage = () => (<Layout><HomeRemote /></Layout>);

export default HomePage;
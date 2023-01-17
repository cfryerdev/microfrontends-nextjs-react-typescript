import React from "react";
//import { useParams } from "react-router-dom";
import Layout from "../app/layout";

// @ts-ignore
const SampleRemote = React.lazy(() => import("remote_sample/Application"));

const SamplePage = () => {
    //let { id } = useParams();
    return (<Layout><SampleRemote id={666} /></Layout>);
}

export default SamplePage;
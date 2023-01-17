import React from "react";
//import { useParams } from "react-router-dom";
import Layout from "../app/layout";
import { FederationBoundary } from "@module-federation/utilities/src/utils/react";
import { importRemote } from "@module-federation/utilities";

//Shame on you for using any.
const MyErrorBoundary = (props: any) => {
	const { children } = props;
	return <div>{children}</div>;
};

const SamplePage = () => {
	return (
		<FederationBoundary
			dynamicImporter={() =>
				importRemote({
					url: () => Promise.resolve("http://localhost:3002"),
					scope: "remote_sample",
					module: "Application",
					remoteEntryFileName: "remote.js",
				})
			}
			fallback={() => null}
			customBoundary={MyErrorBoundary}
		/>
	);
};

export default SamplePage;

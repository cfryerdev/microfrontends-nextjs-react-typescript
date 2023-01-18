import React from "react";
import Layout from "../app/layout";
import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";
import type Home from "remote_home/Application";
import PageLoader from "@shared/components/page-loader";
import { ErrorBoundary } from "@shared/components/error-boundary";

const HomeRemote = dynamic(() =>
    importRemote<typeof Home>({
        url: "http://localhost:3001",
        scope: "remote_home",
		module: "Application",
		remoteEntryFileName: "remote.js",
		bustRemoteEntryCache: false
    }), { ssr: false, loading: () => <PageLoader /> }
);

const HomePage = () => {
	return (
		<Layout>
			<ErrorBoundary>
				<HomeRemote />
			</ErrorBoundary>
		</Layout>
	);
};

export default HomePage;

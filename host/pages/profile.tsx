import React from "react";
import Layout from "../app/layout";
import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";
import type Profile from "remote_profile/Application";
import PageLoader from "@shared/components/page-loader";
import { ErrorBoundary } from "@shared/components/error-boundary";

const ProfileRemote = dynamic(() =>
    importRemote<typeof Profile>({
        url: "http://localhost:3003", // TODO: Get this from configuration api
        scope: "remote_profile",
		module: "Application",
		remoteEntryFileName: "remote.js",
		bustRemoteEntryCache: false
    }), { ssr: false, loading: () => <PageLoader /> }
);

const ProfilePage = () => {
	return (
		<Layout>
			<ErrorBoundary>
				<ProfileRemote />
			</ErrorBoundary>
		</Layout>
	);
};

export default ProfilePage;

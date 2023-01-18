import React from "react";
import { useRouter } from 'next/router';
import Layout from "../../app/layout";
import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";
import type Sample from "remote_sample/Application";
import PageLoader from "@shared/components/page-loader";
import { ErrorBoundary } from "@shared/components/error-boundary";

const SampleRemote = dynamic(() =>
    importRemote<typeof Sample>({
        url: "http://localhost:3002", // TODO: Get this from configuration api
        scope: "remote_sample",
		module: "Application",
		remoteEntryFileName: "remote.js",
		bustRemoteEntryCache: false
    }), { ssr: false, loading: () => <PageLoader /> }
);

const SamplePage = () => {
	const router = useRouter()
  	const { id } = router.query;
	return (
		<Layout>
			<ErrorBoundary>
				<SampleRemote id={id as string} />
			</ErrorBoundary>
		</Layout>
	);
};

export default SamplePage;

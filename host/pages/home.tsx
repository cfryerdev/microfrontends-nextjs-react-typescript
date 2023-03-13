import React from "react";
import Layout from "../app/layout";
import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";
import PageLoader from "@shared/components/page-loader";
import { ErrorBoundary } from "@shared/components/error-boundary";

interface HomePageProps {
    remoteUrl: string;
}

const HomePage = ({ remoteUrl }: HomePageProps) => {
    const HomeRemote = dynamic(
        async () => {
            return importRemote<typeof React.Component>({
                url: remoteUrl,
                scope: 'remote_home',
                module: 'Application',
                remoteEntryFileName: 'remote.js',
                bustRemoteEntryCache: true,
            });
        },
        { ssr: false, loading: () => <PageLoader label="Loading home remote..." /> }
    );
	return (
		<Layout>
			<ErrorBoundary>
				<HomeRemote />
			</ErrorBoundary>
		</Layout>
	);
};
export async function getServerSideProps() {
    return {
        props: {
            remoteUrl: "http://localhost:3001",
        } as HomePageProps,
    };
}

export default HomePage;

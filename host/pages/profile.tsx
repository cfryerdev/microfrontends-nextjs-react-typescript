import React from "react";
import Layout from "../app/layout";
import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";
import PageLoader from "@shared/components/page-loader";
import { ErrorBoundary } from "@shared/components/error-boundary";

interface ProfilePageProps {
    remoteUrl: string;
}

const ProfilePage = ({ remoteUrl }: ProfilePageProps) => {
    const ProfileRemote = dynamic(
        async () => {
            return importRemote<typeof React.Component>({
                url: remoteUrl,
                scope: 'remote_profile',
                module: 'Application',
                remoteEntryFileName: 'remote.js',
                bustRemoteEntryCache: true,
            });
        },
        { ssr: false, loading: () => <PageLoader label="Loading profile remote..." /> }
    );
	return (
		<Layout>
			<ErrorBoundary>
				<ProfileRemote />
			</ErrorBoundary>
		</Layout>
	);
};
export async function getServerSideProps() {
    return {
        props: {
            remoteUrl: "http://localhost:3003",
        } as ProfilePageProps,
    };
}

export default ProfilePage;

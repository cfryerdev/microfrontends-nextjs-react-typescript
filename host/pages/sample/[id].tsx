import React from "react";
import { useRouter } from 'next/router';
import Layout from "../../app/layout";
import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";
import PageLoader from "@shared/components/page-loader";
import { ErrorBoundary } from "@shared/components/error-boundary";

interface SamplePageProps {
    remoteUrl: string;
}

const SamplePage = ({ remoteUrl }: SamplePageProps) => {
    const SampleRemote = dynamic(
        async () => {
            return importRemote<typeof React.Component>({
                url: remoteUrl,
                scope: 'remote_sample',
                module: 'Application',
                remoteEntryFileName: 'remote.js',
                bustRemoteEntryCache: true,
            });
        },
        { ssr: false, loading: () => <PageLoader label="Loading sample remote..." /> }
    );
	const router = useRouter();
	const { id } = router.query;
	return (
		<Layout>
			<ErrorBoundary>
                {/* @ts-ignore */}
				<SampleRemote id={id} />
			</ErrorBoundary>
		</Layout>
	);
};
export async function getServerSideProps() {
    return {
        props: {
            remoteUrl: "http://localhost:3002",
        } as SamplePageProps,
    };
}

export default SamplePage;


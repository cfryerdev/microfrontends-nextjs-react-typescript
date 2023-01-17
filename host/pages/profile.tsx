import React, { Suspense } from "react";
import PageLoader from "../app/loading";
import { FederationBoundary } from "@module-federation/utilities/src/utils/react";

// @ts-ignore
//const ProfileRemote = React.lazy(() => import("remote_profile/Application"));

//Shame on you for using any.
const MyErrorBoundary = (props: any) => {
	const { children } = props;
	return <div>{children}</div>;
};

const ProfilePage = () => {
	return (
		<FederationBoundary
			dynamicImporter={() =>
				import("remote_profile/Application").then((m) => m.default)
			}
			fallback={() => null}
			customBoundary={MyErrorBoundary}
		/>
	);
};

export default ProfilePage;

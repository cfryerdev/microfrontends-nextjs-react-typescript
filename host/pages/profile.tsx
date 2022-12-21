import React, { Suspense } from "react";
import PageLoader from "../app/loading";

//const ProfileRemote = React.lazy(() => import("remote_profile/Application"));

import dynamic from "next/dynamic";
const ProfileRemote = dynamic(() => import("remote_profile/Application"), {
	ssr: false,
});

const ProfilePage = () => {
	return <ProfileRemote />;
};

export default ProfilePage;

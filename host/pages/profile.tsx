
import React, { Suspense } from "react";
import PageLoader from "../app/loading";

// @ts-ignore
//const ProfileRemote = React.lazy(() => import("remote_profile/Application"));

import dynamic from 'next/dynamic';
const ProfileRemote = dynamic(() => import('remote_profile/Application'), {
  ssr: false,
});

const ProfilePage = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <ProfileRemote />
        </Suspense>
    );
}

export default ProfilePage;

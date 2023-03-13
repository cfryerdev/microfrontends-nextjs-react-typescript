import React from "react";

interface PageLoaderProps {
  label: string;
}

const PageLoader = ({ label }: PageLoaderProps) => {
    return (
      <>{label}</>
    );
};

export default PageLoader;
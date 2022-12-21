import React, { useContext } from "react";
import Footer from "@shared/components/footer-component.jsx";

interface LayoutProps {
	children: React.ReactNode;
}

export default ({ children }: LayoutProps) => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-primary">
				<i className="fas fa-bars fa-lg sidemenu-toggle-icon"></i>
			</nav>
			<div className="container-fluid p-4">{children}</div>
			<Footer
				year={2022}
				name={"Microfrontends Example"}
				version={`1.0.2`}
				userName={""}
			/>
		</>
	);
};

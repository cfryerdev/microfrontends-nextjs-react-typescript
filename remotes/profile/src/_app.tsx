import React, { useState } from "react";

const Profile = () => {
	const [hasData, setData] = useState(true);
	return (
		<>
			<ol className="breadcrumb">
				<li className="breadcrumb-item">Home</li>
				<li className="breadcrumb-item active">Profile</li>
			</ol>
			<h2>Remote App - Profile</h2>
			<p>This is the profile remote application. Data: { hasData.toString() } </p>
		</>
	);
}

export default Profile;

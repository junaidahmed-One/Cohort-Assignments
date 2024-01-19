import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";

export function CreateProfile() {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [followers, setFollowers] = useState(0);
	const [likes, setLikes] = useState(0);
	const [photos, setPhotos] = useState(0);
	const [profilecard, setProfileCard] = useState([]);

	return (
		<div>
			<input
				type="text"
				placeholder="Enter your name"
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="Enter your location"
				onChange={(e) => {
					setLocation(e.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="Enter your no. of followers"
				onChange={(e) => {
					setFollowers(e.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="Enter your likes"
				onChange={(e) => {
					setLikes(e.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="Enter your total photos"
				onChange={(e) => {
					setPhotos(e.target.value);
				}}
			/>

			<button
				onClick={() => {
					setProfileCard([
						...profilecard,
						{
							name: name,
							location: location,
							followers: followers,
							likes: likes,
							photos: photos,
						},
					]);
				}}
			>
				Create Profile
			</button>

			<div>
				<BrowserRouter>
					<ChangeRoute />
					<Routes>
						<Route
							path="/profile"
							element={<ProfileCard card={profilecard} />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

function ChangeRoute() {
	const navigate = useNavigate();

	return (
		<div>
			<button
				onClick={() => {
					navigate("/profile");
				}}
			>
				Show Profile
			</button>
		</div>
	);
}

import { atom, selector } from "recoil";
import axios from "axios";
export const AppBar = atom({
	key: "AppbarNotifications",
	default: {
		network: 0,
		messaging: 0,
		notifications: 600,
	},
});

export const AsynchronousDataQueries = atom({
	key: "asynchronousdq",
	default: selector({
		key: "serverCallSelector",
		get: async () => {
			const res = await axios.get(
				"https://sum-server.100xdevs.com/notifications"
			);
			return res.data;
		},
	}),
});

export const totalNotificationSelector = selector({
	key: "totalNotificationSelector",
	get: ({ get }) => {
		const allNotification = get(AsynchronousDataQueries);
		return (
			allNotification.network +
			allNotification.notifications +
			allNotification.messaging
		);
	},
});

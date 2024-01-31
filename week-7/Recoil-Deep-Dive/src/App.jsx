import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
	AppBar,
	AsynchronousDataQueries,
	totalNotificationSelector,
} from "./recoil-atoms/atoms";

function App() {
	return (
		<>
			<RecoilRoot>
				<MainApp />
			</RecoilRoot>
		</>
	);
}

function MainApp() {
	const appBar = useRecoilValue(AsynchronousDataQueries);
	const totalMe = useRecoilValue(totalNotificationSelector);
	return (
		<div>
			<button>Home</button>
			<button>
				My Network {appBar.network >= 100 ? "99+" : appBar.network}
			</button>
			<button>
				Messaging {appBar.messaging >= 100 ? "99+" : appBar.messaging}
			</button>
			<button>
				Notications{" "}
				{appBar.notifications >= 100 ? "99+" : appBar.notifications}
			</button>
			<button>Me {totalMe}</button>
		</div>
	);
}

export default App;

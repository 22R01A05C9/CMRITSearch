import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Loading from "./components/loading/loading";
import "./App.css";
import { Suspense } from "react";

function App(){
	return (
		<Suspense fallback={<Loading />}>
			<div className="App">
				<Main />
				<Footer />
			</div>
		</Suspense>
	);
}

export default App;
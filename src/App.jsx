import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Loading from "./components/loading/loading";
import "./App.css";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

function App(){
	return (
		<Suspense fallback={<Loading />}>
			<ToastContainer
				autoClose={2000}
				closeOnClick={true}
				pauseOnHover={true}
				draggable={true}
				theme="light" />
			<div className="App">
				<Main />
				<Footer />
			</div>
		</Suspense>
	);
}

export default App;
import {Routes, Route} from "react-router-dom"
import Main from "pages/main"
import NotFound from "pages/not-found"


export default function Pages() {

	return(
		<Routes>
			<Route path={"/"} element={<Main />} />
			<Route path={"*"} element={<NotFound />} />
		</Routes>
	)
}
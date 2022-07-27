import './index.scss'
import { Button } from 'components'

export default function Banner404() {
	return(
		<div className="not-found">
			<h1 className="not-found__big-title">404</h1>
			<h2 className="not-found__small-title">Ooops! Page Not Found</h2>
			<p className="not-found__description">This page doesn't exist or was removed. We suggest you back to homepage</p>
			<Button color={"green"} size={"small"} content={"Back to Homepage"} link={"/"} />
		</div>
	)
}
import './index.scss'
import { Button } from 'components'

export default function MainBanner() {

	return(
		<div className="main-banner">
			<h1 className="main-banner__title"><span className="main-banner__span">The</span> node installation service</h1>
			<p className="main-banner__description">Node farming accessible to everyone, anywhere, anytime</p>
			<Button
			color={"green"}
			size={"small"}
			content={"Start earning"}
			link={"/"} />
		</div>
	)
}
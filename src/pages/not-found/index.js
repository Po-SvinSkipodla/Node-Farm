import "./index.scss"
import {
	Spiral,
	Ellipse,
	Sphere,
	SphereEllMobile,
	BtcBubble,
	Spiral404,
	EthBubble
} from "assets/images"
import { Header, Banner404 } from "components"
import { Fade } from "react-reveal"


export default function NotFound() {

	return(
		<div className="hero--404">
			<Fade top>
				<img src={Spiral} alt="" className="decoration spiral" />
			</Fade>
			<Fade bottom>
			<div className="decoration ellipse1-404">
				<Ellipse />
			</div>
			<div className="decoration ellipse2-404">
				<Ellipse />
			</div>
			<div className="decoration ellipse3-404">
				<Ellipse />
			</div>
			<div className="decoration ellipse4-404">
				<Ellipse />
			</div>
			<div className="decoration btc1-404">
				<BtcBubble />
			</div>
			<div className="decoration btc2-404">
				<BtcBubble />
			</div>
			<div className="decoration btc3-404">
				<BtcBubble />
			</div>
			<div className="decoration eth1-404">
				<EthBubble />
			</div>
			<img src={Spiral404} alt="spiral-404.png" className="decoration spiral-404" />
			<img src={Sphere} alt="sphere.png" className="decoration sphere-404" />
			<img src={SphereEllMobile} alt="sphere-ellipse-mobile.png" className="decoration sphere-ell-mobile-404" />
			</Fade>
			<div>
				<Header />
				<Banner404 />
			</div>
		</div>
	)
}
import './index.scss'
import { Spiral, Ellipse, Sphere } from 'assets/images'
import { Header, Banner404 } from 'components'

export default function NotFound() {

	return(
		<div className="hero--404">
			<img src={Spiral} alt="" className="decoration bubble spiral" />
			<div className="decoration ellipse1-404">
				<Ellipse />
			</div>
			<div className="decoration ellipse2-404">
				<Ellipse />
			</div>
			<div className="decoration ellipse3-404">
				<Ellipse />
			</div>
			{/* <img src={Sphere} alt="sphere.png" className="decoration bubble sphere-404" /> */}
			<div>
				<Header />
				<Banner404 />
			</div>
		</div>
	)
}
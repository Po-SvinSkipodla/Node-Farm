import './index.scss'
import { Spiral } from 'assets/images'
import { Header, Banner404 } from 'components'

export default function NotFound() {

	return(
		<div className="hero--404">
			<img src={Spiral} alt="" className="spiral" />
			<div>
				<Header />
				<Banner404 />
			</div>
		</div>
	)
}
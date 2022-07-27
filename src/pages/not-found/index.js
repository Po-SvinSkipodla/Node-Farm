import './index.scss'
import { Spiral } from 'assets/images'
import { Logo, Banner404 } from 'components'

export default function NotFound() {

	return(
		<div className="main-title-container">
			<img src={Spiral} alt="" className="spiral" />
			<div>
				<Logo />
				<Banner404 />
			</div>
		</div>
	)
}
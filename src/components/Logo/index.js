import LogoImg from '../../assets/images/Logo.svg'
import './index.scss'

export default function Logo() {

	return(
		<div className="header">
			<img  src={LogoImg} alt="Logo.svg" className="header__image" />
		</div>
	)
}
import { LogoIcon } from 'assets/images'
import { Button } from 'components'
import './index.scss'

export default function Logo() {

	return(
		<div className="header">
			<LogoIcon className="header__image" />
			<Button
			color={"grey"}
			size={"small"}
			content={"Launch App"}
			link={"/"} />
		</div>
	)
}
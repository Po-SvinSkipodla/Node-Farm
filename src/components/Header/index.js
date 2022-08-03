import { LogoIcon } from 'assets/images'
import { Button } from 'components'
import './index.scss'

export default function Header() {

	return(
		<header className="header">
			<LogoIcon className="header__image" />
			<Button
			color={"grey"}
			size={"small"}
			content={"Launch App"}
			link={"/"} />
		</header>
	)
}
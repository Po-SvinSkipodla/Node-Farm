import "components/Button/index.scss"
import { ArrowRight } from "assets/images"
import { Link } from "react-router-dom"


export default function Button({color, size, content, link}) {
	
	const buttonColor = {
		green: "btn--green",
		grey: "btn--grey",
		white: "btn--white"
	}

	const buttonSize = {
		small: "btn--small",
		large: "btn--large"
	}

	return(
		<Link className={`btn ${buttonColor[color] || ""} ${buttonSize[size] || ""}`} to={link}>
			<p className="btn__text">{content}</p>
			<ArrowRight className="btn__arrow" />
		</Link>
	)
}
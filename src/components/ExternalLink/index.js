import "./index.scss"
import { ArrowRight } from "assets/images"


export default function ExternalLink({link}) {
	return (
		<a target="_blank" href={link} className="external-link">
			<p className="external-link__text">Learn more</p>
			<ArrowRight />
		</a>
	)
}
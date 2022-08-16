import "./index.scss"
import { ExternalLink } from "components"


export default function Card({img, alt, title, text, link}) {

	return(
		<article className="card">
			<div>
				<div className="card__title">
					<img src={img} alt={alt} />
					<h2 className="card__title-text">{title}</h2>
				</div>
				<p className="card__description">{text}</p>
			</div>
			<ExternalLink link={link} />
		</article>
	)
}
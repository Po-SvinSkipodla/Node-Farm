import './index.scss'
import { ArrowRight } from 'assets/images'

export default function Card({img, alt, title, text}) {

	return(
		<article className="card">
			<div>
				<div className="card__title">
					<img src={img} alt={alt} />
					<h2 className="card__title-text">{title}</h2>
				</div>
				<p className="card__description">{text}</p>
			</div>
			<div className="card__button">
				<p className="card__button-text">Learn more</p>
				<ArrowRight />
			</div>
		</article>
	)
}
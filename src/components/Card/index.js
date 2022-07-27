import './index.scss'
import ArrowGreen from 'assets/images/arrow-green.svg'

export default function Card({img, alt, title, text}) {

	return(
		<div className="card">
			<div>
				<div className="card__title">
					<img src={img} alt={alt} />
					<h2 className="card__title-text">{title}</h2>
				</div>
				<p className="card__description">{text}</p>
			</div>
			<div className="card__button">
				<p className="card__button-text">Learn more</p>
				<img src={ArrowGreen} alt="arrow-green.svg" />
			</div>
		</div>
	)
}
import './index.scss'

export default function Slide({img, alt, title, tokens, price, profit}) {

	return(
		<div className="slider">
			<img src={img} alt={alt} className="slider__image" />
			<div className="slider-title">
				<h3 className="slider__title">{title}</h3>
				<p className="slider__tokens">{tokens} tokens</p>
			</div>
			<div className="slider__description">
				<div className="slider__price">
					<p className="slider__price-text">Sale price</p>
					<p className="slider__price-number">{price} $</p>
				</div>
				<div className="slider__profit">
					<p className="slider__profit-text">Profit</p>
					<p className="slider__profit-number">{profit} $</p>
				</div>
			</div>
		</div>
	)
}
import './index.scss'

export default function Benefits({img, alt, title, text}) {

	return(
		<div className="benefits">
			<div>
				<img src={img} alt={alt} />
			</div>
			<div className="benefits__description">
				<h3 className="benefits__title">{title}</h3>
				<p className="benefits__text">{text}</p>
			</div>
		</div>
	)
}
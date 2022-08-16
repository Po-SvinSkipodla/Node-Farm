import "./index.scss"


export default function Benefits({img, alt, title, text}) {

	return(
		<article className="benefits">
			<img src={img} alt={alt} className="benefits__img" />
			<div className="benefits__description">
				<h3 className="benefits__title">{title}</h3>
				<p className="benefits__text">{text}</p>
			</div>
		</article>
	)
}
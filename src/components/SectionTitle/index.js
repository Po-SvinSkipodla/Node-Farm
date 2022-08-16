import "components/SectionTitle/index.scss"


export default function SectionTitle({title, description, align}) {

	const textAlign = {
		left:  "title--align-left",
		center: "title--align-center"
	}

	return (
		<div className={`title ${textAlign[align] || ""}`}>
 			<h2 className="title__content">{title}</h2>
 			{description && <p className="title__description">{description}</p>}
 		</div>
	)
}
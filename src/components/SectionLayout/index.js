import './index.scss'
import { SectionTitle } from 'components'


export default function SectionLayout({children, title, description, align, container}) {
	return(
		<div className={`section ${container || ""}`}>
			<SectionTitle 
			align={align}
			title={title}
			description={description} />
			{children}
		</div>
	)
}
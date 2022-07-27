import './index.scss'
import { SectionTitle } from 'components'


export default function SectionLayout({children, title, description, align}) {
	return(
		<div className="section">
			<SectionTitle 
			align={align}
			title={title}
			description={description} />
			{children}
		</div>
	)
}
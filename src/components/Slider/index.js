import Carousel from 'nuka-carousel'
import { useState, useLayoutEffect } from 'react'

export default function Slider({children}) {
	const [slides, setSlides] = useState(1);

	const handleResize = (event) => {
		const width = window.innerWidth
		if (width >= 320 && width <= 500) setSlides(1)
		if (width >= 500 && width <= 700) setSlides(2)
		if (width >= 700 && width <= 800) setSlides(3)
		if (width >= 1000 && width <= 1400) setSlides(4)
		if (width >= 1400) setSlides(5)
	}

	useLayoutEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return(
		<Carousel
		slidesToShow={slides}
		defaultControlsConfig={{
			nextButtonStyle: {
				display: "none"
			},
			prevButtonStyle: {
				display: "none"
			},
			pagingDotsContainerClassName: "paging-dots",
			pagingDotsClassName: "paging-dots__button"
		}}
		wrapAround={true}
		pauseOnHover={true}
		autoplay={true} >
			{children}
		</Carousel>
	)
}
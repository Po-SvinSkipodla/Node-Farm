import Carousel from "nuka-carousel"
import { useState, useLayoutEffect } from "react"
import "./index.scss"

export default function Slider({children}) {
	const [slides, setSlides] = useState(1);

	const handleResize = (event) => {
		const width = window.innerWidth
		if (width >= 320 && width <= 500) return setSlides(1)
		if (width >= 500 && width <= 700) return setSlides(2)
		if (width >= 700 && width <= 800) return setSlides(3)
		if (width >= 1000) return setSlides(4)
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
		wrapAround
		pauseOnHover
		autoplay >
			{children}
		</Carousel>
	)
}
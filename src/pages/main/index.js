import { Spiral, BtcBubble, EthBubble, Ellipse, Diamond, LinEllipse, Torus, Sphere, DiamondEllipse, SliderRings } from "assets/images/index.js"
import { Wallet, Docker, Favorite, Metamask, Grafana, Payment, Subspace, Aptos, Quai, Masa, Ironfish, Massa, Casper, Horp, Forta, Solana } from "assets/icons"
import { Header, Card, Benefits, Slide, SectionLayout, Button, Footer, MainBanner, Slider } from "components"
import { Fade } from "react-reveal"
import "./index.scss"


export default function Main() {
	return(
		<div>
			<Fade>
				<div className="hero">
					<img src={Spiral} alt="" className="decoration spiral" />
					<div className="decoration btc1">
						<BtcBubble />
					</div>
					<div className="decoration eth1">
						<EthBubble />
					</div>
					<div className="decoration ellipse1">
						<Ellipse />
					</div>
					<div className="decoration ellipse2">
						<Ellipse />
					</div>
					<div className="decoration ellipse3">
						<Ellipse />
					</div>
					<img src={Diamond} alt="" className="decoration diamond" />
					<img src={DiamondEllipse} alt="" className="decoration diamond-ellipse" />
					<img src={LinEllipse} alt="" className="decoration lin-ellipse" />
					<div>
						<Fade bottom>
							<Header />
						</Fade>
						<MainBanner />
					</div>
				</div>
			</Fade>
			<div className="background">
				<section className="beginners">
					<div className="decoration btc2">
						<BtcBubble />
					</div>
					<h2 className="banner-title">Never heard of nodes before?</h2>
					<div className="beginners-container">
						<p className="banner-description">If you’re unsure of what a node is or how the farming process works, be sure to check out our intro for beginners</p>
						<Button
						color={"white"}
						size={"large"}
						content={"Get acquainted"}
						link={"/"} />
					</div>
				</section>
				<div className="wraper container">
					<SectionLayout
					align={"center"}
					title={"What can we offer you?"}
					container={"benefits-container"}>
						<div className="decoration ellipse4">
							<Ellipse />
						</div>
						<div className="decoration ellipse5">
							<Ellipse />
						</div>
						<img src={Torus} alt="" className="decoration torus" />
						<Benefits 
						img={Wallet} 
						alt={"wallet-icon.png"} 
						title={"100% of every reward"} 
						text={"We don’t charge any fees from the rewards you get. You only pay for our services and the servers themselves"} />
						<Benefits 
						img={Docker} 
						alt={"docker-icon.png"} 
						title={"Automated node installation"} 
						text={"All nodes are set up instantly using Docker components. You won’t have to wait"} />
						<Benefits 
						img={Favorite} 
						alt={"fav-icon.png"} 
						title={"Subscription"} 
						text={"Choose a plan and pay once a month"} />
						<Benefits 
						img={Metamask} 
						alt={"metamask-icon.png"} 
						title={"Metamask Integration"} 
						text={"Sign up using your desired wallet in a split second. Add funds to your account in two clicks"} />
						<Benefits 
						img={Grafana} 
						alt={"grafana-icon.png"} 
						title={"Grafana"} 
						text={"Statistics of every node, available in real-time. Only for premium users"} />
						<Benefits 
						img={Payment} 
						alt={"payment-icon.png"} 
						title={"Auto-payment"} 
						text={"Money is automatically withdrawn from your system account. No need to worry about paying in time"} />
					</SectionLayout>
					<SectionLayout
					align={"center"}
					title={"Leading nodes, one click away"}
					description={"A list of hand-picked projects, available for you today"}
					container={"card-container"}>
						<div className="decoration ellipse6">
							<Ellipse />
						</div>
						<div className="decoration ellipse7">
							<Ellipse />
						</div>
						<Card
						img={Subspace}
						alt={"subspace-icon.png"}
						title={"Subspace"}
						text={"Fourth generation blockchain built for the next wave of crypto creators"}
						link="https://music.youtube.com/playlist?list=OLAK5uy_kKzmiwGsUH5BhqqgOfHDefQWiixN1q2EQ" />
						<Card
						img={Aptos}
						alt={"aptos-icon.png"}
						title={"Aptos"}
						text={"A new independent project focused on delivering the safest and most production-ready Layer 1 blockchain in the world"} />
						<Card
						img={Quai}
						alt={"quai-icon.png"}
						title={"Quai"}
						text={"Fourth generation blockchain built for the next wave of crypto creators"} />
						<Card
						img={Masa}
						alt={"masa-icon.png"}
						title={"Masa"}
						text={"Fourth generation blockchain built for the next wave of crypto creators"} />
						<Card
						img={Ironfish}
						alt={"ironfish-icon.png"}
						title={"Ironfish"}
						text={"Fourth generation blockchain built for the next wave of crypto creators"} />
						<Card
						img={Massa}
						alt={"massa-icon.png"}
						title={"Massa"}
						text={"Fourth generation blockchain built for the next wave of crypto creators"} />
					</SectionLayout>
				</div>
				<SectionLayout
				align={"center"}
				title={"Economics slider"} >
					<img src={SliderRings} alt="slider-rings.png" className="decoration slider-rings" />
					<Slider>
						<Slide
						img={Horp}
						alt={"horp-icon.png"}
						title={"HORP"}
						tokens={"10 000"}
						price={"0,7 - 1"}
						profit={"7 000 - 10 000"} />
						<Slide
						img={Casper}
						alt={"horp-icon.png"}
						title={"HORP"}
						tokens={"10 000"}
						price={"0,7 - 1"}
						profit={"7 000 - 10 000"} />
						<Slide
						img={Solana}
						alt={"horp-icon.png"}
						title={"HORP"}
						tokens={"10 000"}
						price={"0,7 - 1"}
						profit={"7 000 - 10 000"} />
						<Slide
						img={Forta}
						alt={"horp-icon.png"}
						title={"HORP"}
						tokens={"10 000"}
						price={"0,7 - 1"}
						profit={"7 000 - 10 000"} />
						<Slide
						img={Horp}
						alt={"horp-icon.png"}
						title={"HORP"}
						tokens={"10 000"}
						price={"0,7 - 1"}
						profit={"7 000 - 10 000"} />
						<Slide
						img={Casper}
						alt={"horp-icon.png"}
						title={"HORP"}
						tokens={"10 000"}
						price={"0,7 - 1"}
						profit={"7 000 - 10 000"} />
						<Slide
						img={Solana}
						alt={"horp-icon.png"}
						title={"HORP"}
						tokens={"10 000"}
						price={"0,7 - 1"}
						profit={"7 000 - 10 000"} />
						<Slide
						img={Forta}
						alt={"horp-icon.png"}
						title={"HORP"}
						tokens={"10 000"}
						price={"0,7 - 1"}
						profit={"7 000 - 10 000"} />
					</Slider>
				</SectionLayout>
				<div className="wraper container">
					<div className="c2a">
					<img src={Sphere} alt="" className="decoration sphere" />
					<div className="decoration eth2">
							<EthBubble />
					</div>
					<div className="decoration ellipse8">
						<Ellipse />
					</div>
						<h2 className="banner-title">Don’t be the one to miss another opportunity</h2>
						<p className="banner-description">Do your research and become a node runner today</p>
						<Button
						color={"green"}
						size={"small"}
						content={"Launch App"}
						link={"/"} />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}
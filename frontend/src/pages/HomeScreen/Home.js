import React from "react";
import { Button, Image } from "react-bootstrap";
import "./style.css";

const Home = () => {
	return (
		<>
			<div className='engine'>
				<a href='https://mobiri.se/q'>responsive web templates</a>
			</div>
			<div
				className='carousel slide cid-r5nP0LbmIG'
				data-interval='false'
				id='slider1-1e'>
				<div class='full-screen'>
					<div
						class='mbr-slider slide carousel'
						data-pause='true'
						data-keyboard='false'
						data-ride='carousel'
						data-interval='4000'>
						<ol class='carousel-indicators'>
							<li
								data-app-prevent-settings=''
								data-target='#slider1-1e'
								class=' active'
								data-slide-to='0'></li>
							<li
								data-app-prevent-settings=''
								data-target='#slider1-1e'
								data-slide-to='1'></li>
							<li
								data-app-prevent-settings=''
								data-target='#slider1-1e'
								data-slide-to='2'></li>
						</ol>
						<div class='carousel-inner' role='listbox'>
							<div
								class='carousel-item slider-fullscreen-image active'
								data-bg-video-slide='false'
								// style={{'background-image': url(assets/images/img-3795-2000x1333.jpg)}}>
							>
								<div class='container container-slide'>
									<div class='image_wrapper'>
										<div class='mbr-overlay' style={{ opacity: 0.4 }}></div>
										{/* <img src='assets/images/img-3795-2000x1333.jpg' /> */}
										<div class='carousel-caption justify-content-center'>
											<div class='col-10 align-left'>
												<h4 class='mbr-fonts-style display-4'>
													PERMANENT MAKEUP by MAYA
												</h4>
												<p class='lead mbr-text mbr-fonts-style display-5'>
													Natural Looking Permanent Cosmetics.
													<br />
													Custom Skin Serums.
													<br />
													Look Effortlessly Breathtaking! &nbsp;
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class='carousel-item slider-fullscreen-image'
								data-bg-video-slide='false'
								// style='background-image: url(assets/images/img-4267-2000x1333.jpg);'
							>
								<div class='container container-slide'>
									<div class='image_wrapper'>
										{/* <img src='assets/images/img-4267-2000x1333.jpg' /> */}
										<div class='carousel-caption justify-content-center'>
											<div class='col-12 align-center'></div>
										</div>
									</div>
								</div>
							</div>
							<div
								class='carousel-item slider-fullscreen-image'
								data-bg-video-slide='false'
								// style={{
								// 	"background-image": require("/browink.jpg"),
								// }}
							>
								<div className='container container-slide'>
									<div class='image_wrapper'>
										{/* <img src='assets/images/img-4240bw-2000x1333.jpg' /> */}
										<div class='carousel-caption justify-content-center'>
											<div class='col-10 align-center'></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<a
							data-app-prevent-settings=''
							class='carousel-control carousel-control-prev'
							role='button'
							data-slide='prev'
							href='#slider1-1e'>
							<span aria-hidden='true' class='mbri-left mbr-iconfont'></span>
							<span class='sr-only'>Previous</span>
						</a>
						<a
							data-app-prevent-settings=''
							class='carousel-control carousel-control-next'
							role='button'
							data-slide='next'
							href='#slider1-1e'>
							<span aria-hidden='true' class='mbri-right mbr-iconfont'></span>
							<span class='sr-only'>Next</span>
						</a>
					</div>
				</div>
			</div>
			{/* End of Carousel Slide */}

			{/* ABOUT MAYA SECTION HERE */}
			<section className='mbr-section content4 cid-r5hvp1My50' id='content4-3'>
				<div class='container' id='aboutmaya'>
					<div class='media-container-row'>
						<div className='title col-12 col-md-8'>
							<h2 class='align-center pb-3 mbr-fonts-style display-2'>
								About MAYA
							</h2>
							<Image
								src='mayaspic.png'
								roundedCircle
								className='img-item'
								alt='Headshot of Maya'
							/>
							<h3 class='mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5'>
								You may already know me as a permanent makeup artist, but I’m
								also a chemist specializing in skincare. I customize unique
								formulas for my clients to address their specific needs.
								<br />
								<br />
								After making a dramatic move to a desert, my skin health
								declined. After finding nothing that worked, I created my own
								line. When my colleagues in the beauty industry noticed the
								improvement in my looks and wanted to buy my products to use for
								themselves and their clients,{" "}
								<i>Natural Skincare Alternatives</i> was born.
								<br />
								<br />
								My formulations address specific concerns and are then adapted
								to overcome each client’s personal skin and/or hair care
								challenges. All are completely natural and cruelty-free, and
								most are vegan, too, unless otherwise specified.
								<br />
								<br />
								My goal is to tackle the cosmetic issues that are causing you
								embarrassment and sadness. I know all too well how distressing
								it is to feel uncomfortable in your own skin.
								<br />
								<br />
								Through natural looking permanent cosmetics and custom skincare,
								my mission is to help you love your natural beauty that is like
								no other!
								<br />
							</h3>
						</div>
					</div>
				</div>
			</section>
			{/* END OF ABOUT MAYA SECTION */}

			{/* SERVICES SECTION */}
			<section class='accordion2 cid-r5m42F4B59' id='accordion2-5'>
				<div class='container'>
					<div class='media-container-row pt-5'>
						<div class='accordion-content'>
							<h2 class='mbr-section-title align-center pb-3 mbr-fonts-style display-3'>
								MY SERVICES
							</h2>
							<h3 class='mbr-section-subtitle pt-2 align-center mbr-light mbr-fonts-style display-5'>
								All permanent makeup services include one touchup within a year
								<br />
								(Post Procedure).
								<br />
								<br />
								Additional touchups are an additional charge.
								<br />
								<br />I only use pigments made in The USA and are from quality
								brands.
							</h3>

							<div
								id='bootstrap-accordion_4'
								class='panel-group accordionStyles accordion pt-5 mt-3'
								role='tablist'
								aria-multiselectable='true'>
								<div class='card'>
									<div class='card-header' role='tab' id='headingOne'>
										<a
											role='button'
											class='collapsed panel-title text-white'
											data-toggle='collapse'
											data-core=''
											href='#collapse1_4'
											aria-expanded='false'
											aria-controls='collapse1'>
											<h4 class='mbr-fonts-style display-5'>
												Natural Looking Permanent Eyebrows (Shading)
											</h4>
										</a>
									</div>

									<div
										id='collapse1_4'
										class='panel-collapse noScroll collapse'
										role='tabpanel'
										aria-labelledby='headingOne'
										data-parent='#bootstrap-accordion_4'>
										<div class='panel-body p-4'>
											<p class='mbr-fonts-style panel-text display-7'>
												Eyebrows frame the face and bring all the features into
												symmetry. There's no need to worry about hard, bold
												lines that look unnatural because only the top-of-the
												line pigments are custom blended to suit your face and
												skin.
												<br />
												<br />
												<strong>
													<a href='page1.html#content4-c'>READ MORE...</a>
												</strong>
											</p>
										</div>
									</div>
								</div>

								<div class='card'>
									<div class='card-header' role='tab' id='headingTwo'>
										<a
											role='button'
											class='collapsed panel-title text-white'
											data-toggle='collapse'
											data-core=''
											href='#collapse2_4'
											aria-expanded='false'
											aria-controls='collapse2'>
											<h4 class='mbr-fonts-style mbr-fonts-style display-5'>
												Permanent Eyeliner/Eyelash Enhancement
											</h4>
										</a>
									</div>

									<div
										id='collapse2_4'
										class='panel-collapse noScroll collapse'
										role='tabpanel'
										aria-labelledby='headingTwo'
										data-parent='#bootstrap-accordion_4'>
										<div class='panel-body p-4'>
											<p class='mbr-fonts-style panel-text display-7'>
												The first feature most people see on the face are your
												eyes. Look permanently revitalized and bring out their
												natural beauty with eyeliner or a subtle effect of lash
												enhancement.
												<br />
												<br />
												<strong>
													$550 (Full); $450 Top or bottom
													<br />
												</strong>
												<br />
												<strong>
													<a href='page1.html#content4-d'>READ MORE...</a>
												</strong>
												<br />
												<strong>
													<br />
												</strong>
											</p>
										</div>
									</div>
								</div>

								<div class='card'>
									<div class='card-header' role='tab' id='headingThree'>
										<a
											role='button'
											class='collapsed panel-title text-white'
											data-toggle='collapse'
											data-core=''
											href='#collapse3_4'
											aria-expanded='false'
											aria-controls='collapse3'>
											<h4 class='mbr-fonts-style display-5'>Beauty Mole</h4>
										</a>
									</div>
									<div
										id='collapse3_4'
										class='panel-collapse noScroll collapse'
										role='tabpanel'
										aria-labelledby='headingThree'
										data-parent='#bootstrap-accordion_4'>
										<div class='panel-body p-4'>
											<p class='mbr-fonts-style panel-text display-7'>
												Marilyn Monroe, Janet Jackson, and Elizabeth Taylor.
												<br />
												The beauty mark has been a sign of sophistication for
												decades. Look like a glamorous beauty with a beauty mark
												on your face or body.
												<br />
												<br />
												The region that you want the beauty mark on (Upper lip,
												cheek, jawline) is sketched on the skin first so the
												size and shape is agreed upon. Then, the color is chosen
												based on skin tone.
												<br />
												<br />
												<strong>Pricing starts at $250</strong>
												<br />
												<br />
												<strong>
													<a href='page1.html#content4-d'>READ MORE...</a>
												</strong>
											</p>
										</div>
									</div>
								</div>
								<div class='card'>
									<div class='card-header' role='tab' id='headingFour'>
										<a
											role='button'
											class='collapsed panel-title text-white'
											data-toggle='collapse'
											data-core=''
											href='#collapse4_4'
											aria-expanded='false'
											aria-controls='collapse4'>
											<h4 class='mbr-fonts-style display-5'>Scar Camouflage</h4>
										</a>
									</div>
									<div
										id='collapse4_4'
										class='panel-collapse noScroll collapse'
										role='tabpanel'
										aria-labelledby='headingFour'
										data-parent='#bootstrap-accordion_4'>
										<div class='panel-body p-4'>
											<p class='mbr-fonts-style panel-text display-7'>
												If you have a scar that is at least 6 months old from a
												tummy tuck, accident, or surgery that makes you feel
												uneasy, scar camouflaging will help you gain back
												confidence. <br />
												<br />
												The first step is to make sure the scar is flat, so
												planing may be necessary to flatten the scar first and
												induce collagen synthesis. Then, once the scar is flat,
												camouflage sessions can begin with the most natural
												looking pigments.
												<br />
												<br />
												It will depend on the skin tone and type if you will be
												a good candidate. If you're not a good candidate, an
												alternative are my vegan, natural, personalized custom
												skin serums (Have a link here to my skin serum page).
												<br />
												<br />
												<strong>Pricing starts at $400 a session.</strong>
												<br />
												<br />
												<strong>
													<a href='page1.html#content4-f'>READ MORE...</a>
												</strong>
											</p>
										</div>
									</div>
								</div>
								<div class='card'>
									<div class='card-header' role='tab' id='headingFive'>
										<a
											role='button'
											class='collapsed panel-title text-white'
											data-toggle='collapse'
											data-core=''
											href='#collapse5_4'
											aria-expanded='false'
											aria-controls='collapse5'>
											<h4 class='mbr-fonts-style display-5'>
												&nbsp;Areola Repigmentation
											</h4>
										</a>
									</div>
									<div
										id='collapse5_4'
										class='panel-collapse noScroll collapse'
										role='tabpanel'
										aria-labelledby='headingFive'
										data-parent='#bootstrap-accordion_4'>
										<div class='panel-body p-4'>
											<p class='mbr-fonts-style panel-text display-7'>
												If you had a mastectomy and would like to have your
												areola restored, my state-of-the-art pigments will mimic
												your natural color.
												<br />
												<br />
												<strong>
													<a href='servicesdetail.html#content4-h'>
														READ MORE...
													</a>
												</strong>
												<br />
											</p>
										</div>
									</div>
								</div>
								<div class='card'>
									<div class='card-header' role='tab' id='headingSix'>
										<a
											role='button'
											class='collapsed panel-title text-white'
											data-toggle='collapse'
											data-core=''
											href='#collapse6_4'
											aria-expanded='false'
											aria-controls='collapse6'>
											<h4 class='mbr-fonts-style display-5'>
												Permanent Makeup Corrections and Tattoo Removal
											</h4>
										</a>
									</div>
									<div
										id='collapse6_4'
										class='panel-collapse noScroll collapse'
										role='tabpanel'
										aria-labelledby='headingSix'
										data-parent='#bootstrap-accordion_4'>
										<div class='panel-body p-4'>
											<p class='mbr-fonts-style panel-text display-7'>
												If you had work done in the past and are dissatisfied
												with the shape or color, my non-laser technique can
												help.
												<br />
												<br />
												<strong>
													<a href='servicesdetail.html#content4-i'>
														READ MORE...
													</a>
												</strong>{" "}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Maya's pic */}
						<div class='mbr-figure'>
							<img
								src='assets/images/mayaservices-1042x695.jpg'
								alt='Mobirise'
								title=''
							/>
						</div>
					</div>
				</div>
			</section>

			{/* CONSULTATION / RESULTS SECTION / BEFORE AND AFTERS */}
			<section class='cid-r5o4Bm3d2z' id='image4-1i'>
				<div class='container images-container'>
					<div class='media-container-row'>
						<div class='img-item item1'>
							<Image
								src='assets/images/img-3835-1254x836.jpg'
								alt='Consultation Picture'
								title=''
								fluid
							/>
							<div class='img-caption'>
								<p class='mbr-fonts-style align-center mbr-black display-5'>
									<strong>Consultation</strong>
								</p>
							</div>
						</div>
						<div class='img-item item2'>
							<Image
								src='assets/images/img-3843-902x1353.jpg'
								alt='Picture of permanent eyebrow results'
								title=''
								fluid
							/>
							<div class='img-caption'>
								<p class='mbr-fonts-style align-center mbr-black display-5'>
									<strong>Healed Results:</strong>
									<br />
									<br />
									Eyebrows and Eyeliner <br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* END OF BEFORE AND AFTER SECTION */}

			{/* RANDOM SECTION */}
			<section class='mbr-section content4 cid-r5m6dYU7fz' id='content4-6'>
				Random section
			</section>

			{/* CONTACT FOOTER SECTION */}
			<section class='cid-r5tzvuA3Va' id='footer2-1w'>
				<div class='container'>
					<div class='media-container-row content mbr-white'>
						<div
							class='col-12 col-md-3 mbr-fonts-style display-7'
							id='contactDiv'>
							<p class='mbr-text'>
								<strong>Salon Address</strong>
								<br />
								<br />
								Permanent Makeup by Maya
								<br />
								Karl Vasquez Salon &amp; Spa, 73993 Hwy-111, Palm Desert, CA,
								92260
								<br />
								<br />
								<br />
								<strong>Contact:</strong>
								<br />
								<br />
								Email:{" "}
								<a href='mailto:maya@permanentmakeupbymaya.com'>
									<strong>MAYA&nbsp;</strong>
								</a>
								<br />
								Call/Text: <a href='tel:760-459-4434'>760-459-4434</a>
								<br />
							</p>
						</div>

						<div
							class='col-12 col-md-3 mbr-fonts-style display-7'
							id='linksDiv'>
							<p class='mbr-text'>
								<strong>Links</strong>
								<br />
								<br />
								Sign up for my{" "}
								<a href='http://eepurl.com/dDNeMv' target='_blank'>
									<strong>newsletter HERE</strong>
								</a>
							</p>
						</div>

						<div class='col-12 col-md-6' id='googleMap'>
							<div class='google-map'>
								<iframe
									frameborder='0'
									style={{ border: 0 }}
									src='https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJTaoGOn3-2oARAKk8O0HZDp4'
									allowfullscreen=''></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SCROLL TO TOP TOGGLE BUTTON */}
			<div id='scrollToTop' class='scrollToTop mbr-arrow-up'>
				<a style={{}}>
					<i></i>
				</a>
			</div>
		</>
	);
};
export default Home;

import React from 'react';
import Banner from '../Component/banner'
const About = () => {
	return (
		<>
			<Banner bannerTitle={"About page"} />
			<section id="pageContent" className="page-content py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-8 mx-auto">
							<img
								src="https://dummyimage.com/735x350/f8f9fa/6c757d.jpg"
								alt="About Us"
								className="img-fluid mb-3"
							/>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
								nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam a
								mollis odio. Suspendisse blandit leo molestie eleifend vehicula.
								Integer quis bibendum lacus, vitae ultricies ante. Cras et
								tortor vel nulla luctus auctor. Nullam egestas libero elit, quis
								elementum tortor tincidunt eu. Vivamus consequat orci erat, et
								eleifend mi posuere nec. Vestibulum ultricies ornare feugiat.
								Orci varius natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Proin varius, ligula suscipit lobortis
								gravida, elit magna commodo tortor, a iaculis nulla metus
								malesuada nisi. Etiam semper semper nulla. Pellentesque est
								nisi, varius nec turpis eu, tincidunt mollis diam. Nunc
								fermentum elit vel fringilla consectetur. Orci varius natoque
								penatibus et magnis dis parturient montes, nascetur ridiculus
								mus. Donec porta non neque a facilisis.
							</p>
							<p>
								Aenean finibus, turpis at rutrum molestie, elit augue ultricies
								dolor, sed ullamcorper enim dolor non est. Sed nec dictum nunc,
								id aliquam sem. Morbi nec nibh vel neque fringilla pellentesque.
								Cras posuere fermentum magna, eu convallis tellus sagittis nec.
								Cras ac dolor sed ipsum hendrerit tincidunt sit amet at lorem.
								Vestibulum eget venenatis ex. Aliquam a euismod nunc. Aenean
								eget libero ut nibh aliquam fringilla. In sed ligula dui.
								Vestibulum pharetra risus nisi, at faucibus ligula fringilla
								fringilla. Nulla facilisi. Integer quis efficitur nunc.
								Suspendisse quis odio quis eros elementum faucibus ut et est.
								Pellentesque viverra nisl enim, a imperdiet sapien facilisis at.
								Donec eleifend, mi non tempor accumsan, enim sapien congue eros,
								sit amet scelerisque sapien augue non augue. Cras ultricies,
								nisi in accumsan euismod, quam metus ullamcorper magna, a
								ullamcorper arcu erat eu ex.
							</p>
							<p>
								Ut vehicula, quam at tristique commodo, augue nulla viverra dui,
								et condimentum odio elit imperdiet quam. Suspendisse iaculis
								dictum orci non auctor. Vivamus efficitur rhoncus diam, quis
								dictum est bibendum tincidunt. Nulla ultricies, magna vitae
								vulputate interdum, elit diam imperdiet mauris, quis dapibus
								libero turpis eget diam. Nunc nisi nibh, efficitur in imperdiet
								ac, aliquet sed lorem. Duis libero lacus, porta sit amet magna
								eu, bibendum egestas velit. Aliquam accumsan nec erat sed
								luctus. Cras fringilla posuere sem ac aliquam. Nulla vel dui
								vitae magna consectetur finibus nec quis nisi. Nullam tempor
								laoreet bibendum. Mauris elementum libero vitae commodo
								interdum. Aenean placerat magna non velit eleifend, quis rutrum
								erat faucibus.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;

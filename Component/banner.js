import React from 'react';
import Link from 'next/link';
const Banner = (props) => {
	return (
		<>
			<section id="pageBanner" className="page-banner bg-dark py-4 py-md-5">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="h3 text-white m-0 p-0">{props.bannerTitle}</h1>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;

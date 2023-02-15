import React from 'react';
import Link from 'next/link';
const Footer = () => {
	return (
		<>
			<footer id="siteFooter" className="site-header py-3 bg-dark text-white">
				<div className="container">
					<div className="row">
						<div className="col-md-6 text-center text-md-start">
							<p className="p-0 mb-3 m-md-0">
								&copy; Catalog Site 2021. All Rights Reserved.
							</p>
						</div>
						<div className="col-md-6 text-center text-md-end">
							<p className="p-0 m-0">
								Design and Develop by{' '}
								<a
									href="https://github.com/bhavsinh-ker"
									target="_blank"
									className="text-decoration-none text-danger"
								>
									Bhavsinh Ker
								</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;

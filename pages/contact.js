import React from 'react';
import Link from 'next/link';
import Banner from '../Component/banner'
const Contact = () => {
	return (
		<>
			<Banner bannerTitle={"Contact page"} />
			<section id="ContactPageContent" className="contact-page-content py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-12 ">
							<div className="mapouter mb-5">
								<iframe
									height="350"
									className="shadow w-100"
									id="gmapCanvas"
									src="https://maps.google.com/maps?q=kerinfotech&t=&z=19&ie=UTF8&iwloc=&output=embed"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
								></iframe>
							</div>
							<div className="row">
								<div className="col-md-8 mx-auto">
									<div className="row">
										<div className="col-md-6">
											<h3 className="mb-4">Get In Touch</h3>
											<ul className="list-unstyled mb-5">
												<li className="mb-3">
													<span
														className="h4 mb-0 align-bottom d-inline-block"
														style={{ width: '30px' }}
													>
														<i className="bi bi-envelope"></i>
													</span>
													<Link
														href="mailto:info@catalog.com"
														className="text-decoration-none text-dark align-text-bottom"
													>
														info@catalog.com
													</Link>
												</li>
												<li className="mb-3">
													<span
														className="h4 mb-0 align-bottom d-inline-block"
														style={{ width: '30px' }}
													>
														<i className="bi bi-telephone"></i>
													</span>
													<Link
														href="tel:+13256478365"
														className="text-decoration-none text-dark align-text-bottom"
													>
														+1 325 6478 365
													</Link>
												</li>
												<li>
													<span
														className="h4 mb-0 align-bottom d-inline-block"
														style={{ width: '30px' }}
													>
														<i className="bi bi-map"></i>
													</span>
													<Link
														href="https://maps.google.com/maps?ll=23.026487,72.524312&z=19&t=m&hl=en-US&gl=US&mapclient=embed&cid=16467718233169308342"
														target="_blank"
														className="text-decoration-none text-dark align-text-bottom"
													>
														705, Iscon Emporio, Jodhpur Cross Roads, Satellite,
														Ahmedabad, Gujarat 380015
													</Link>
												</li>
											</ul>
											<h3 className="mb-4">Follow Us</h3>
											<ul className="list-inline">
												<li className="list-inline-item">
													<Link
														href="#"
														target="_blank"
														className="h4 m-0 text-decoration-none text-dark"
													>
														<i className="bi bi-facebook"></i>
													</Link>
												</li>
												<li className="list-inline-item">
													<Link
														href="#"
														target="_blank"
														className="h4 m-0 text-decoration-none text-dark"
													>
														<i className="bi bi-instagram"></i>
													</Link>
												</li>
												<li className="list-inline-item">
													<Link
														href="#"
														target="_blank"
														className="h4 m-0 text-decoration-none text-dark"
													>
														<i className="bi bi-twitter"></i>
													</Link>
												</li>
												<li className="list-inline-item">
													<Link
														href="#"
														target="_blank"
														className="h4 m-0 text-decoration-none text-dark"
													>
														<i className="bi bi-linkedin"></i>
													</Link>
												</li>
											</ul>
										</div>
										<div className="col-md-6">
											<h3 className="mb-4">Say Hello!</h3>
											<div className="card bg-light shadow rounded-0">
												<div className="card-body">
													<form className="row g-3">
														<div className="col-12">
															<label htmlFor="name" className="form-label mb-1">
																Your Name
															</label>
															<input
																type="text"
																className="form-control"
																id="name"
															/>
														</div>
														<div className="col-md-6">
															<label
																htmlFor="email"
																className="form-label mb-1"
															>
																Email
															</label>
															<input
																type="email"
																className="form-control"
																id="email"
															/>
														</div>
														<div className="col-md-6">
															<label
																htmlFor="phoneNumber"
																className="form-label mb-1"
															>
																Phone Number
															</label>
															<input
																type="text"
																className="form-control"
																id="phoneNumber"
															/>
														</div>
														<div className="col-12">
															<label
																htmlFor="message"
																className="form-label mb-1"
															>
																Message
															</label>
															<textarea
																className="form-control"
																id="message"
																rows="5"
															></textarea>
														</div>
														<div className="col-12">
															<button
																type="submit"
																className="btn btn-outline-primary"
															>
																Send
															</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;

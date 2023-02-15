import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Banner from '../../Component/banner';
import { useGetPostbyidQuery } from '../Features/apiCall';

const products = () => {
	const [productApi, setProductApi] = useState([])

	const router = useRouter();
	let { product } = router.query;
	let productQuery = useGetPostbyidQuery(product)
	const loading = productQuery.isLoading
	const productData = productQuery.data

	useEffect(() => {
		{
			loading
				?
				<div>Loading...</div>
				:
				setProductApi([productData])
		}
		// console.log(productApi);
	}, [productQuery])
	// console.log("hitesh", productData);
	return (
		<>
			<Banner bannerTitle={"Product Review"} />
			<section id="pageContent" className="page-content py-5">
				<div className="container">
					<div className="row">
						{
							loading
								?
								<div className=' text-center mt-5'>

									<img src="/loaders/giphy.gif" alt="txt" />
								</div>
								:
								productApi.map((e, i) => {
									return (
										<>
											<div className="col-md-12" key={i + 1}>
												<div className="row">
													{/* <!-- Product Image --> */}
													<div className="col-md-8">
														<img
															src={e.thumbnail}
															alt="About Us"
															className="img-fluid mb-3"
														/>
													</div>
													{/* <!-- EOF Product Image --> */}

													{/* <!-- Product Meta Data --> */}
													<div className="col-md-4 mb-4 mb-md-0">
														<h1>{e.title}</h1>

														<h5 className="text-muted">Product Category</h5>
														<h4>
															{e.category}
														</h4>
														<ul className="list-group rounded-0 mb-3">
															<li className="list-group-item">
																<small className="text-muted">
																	<b>Price:</b>
																	<span className="float-end text-success">${e.price}</span>
																</small>
															</li>
															<li className="list-group-item">
																<small className="text-muted">
																	<b>Discount:</b>
																	<span className="float-end text-danger">{e.discountPercentage}%</span>
																</small>
															</li>

															<li className="list-group-item">
																<small className="text-muted">
																	<b>Color:</b>
																	<span className="float-end">Red</span>
																</small>
															</li>
															<li className="list-group-item">
																<small className="text-muted">
																	<b>Size:</b>
																	<span className="float-end">XL</span>
																</small>
															</li>
														</ul>
														<Link href="/contact" className="btn btn-outline-primary">
															Inquiry Now
														</Link>
													</div>
													{/* <!-- EOF Product Meta Data --> */}

													{/* <!-- Product Description --> */}
													<div className="col-lg-8">
														<h3>Description</h3>
														<p>{e.description}</p>

													</div>
													{/* <!-- EOF Product Description --> */}
												</div>
											</div>
										</>
									)
								})
						}
					</div>
				</div>
			</section>
		</>
	);
};


export default products;


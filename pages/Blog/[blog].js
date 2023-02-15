import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Banner from '../../Component/banner';
import { useGetsingalPostQuery } from '../Features/apiCall';
const Blog = () => {
	let [api, setApi] = useState([])

	let router = useRouter();
	const { blog } = router.query;

	let { data, isLoading } = useGetsingalPostQuery(blog)


	console.log(api)
	useEffect(() => {

		{ isLoading ? " " : setApi([data]) }

	}, [isLoading])
	return (
		<>
			<Banner bannerTitle={"Blog Review"} />


			<section id="pageContent" className="page-content py-5">
				<div className="container">
					<div className="row">
						{/* <!-- Post Content --> */}
						{
							isLoading
								?
								<div className=' text-center mt-5'>

									<img src="/loaders/giphy.gif" alt="txt" />
								</div>
								:
								api.map((e, i) => {
									return (
										<>
											<strong>{e.id}</strong>
											<div className="col-md-9">

												<img
													src="/img/background-1.jpg"
													alt="Post Title"
													className="img-fluid mb-3"
												/>
												<strong className="d-inline-block mb-2 text-primary">

												</strong>
												<div className="mb-1 text-muted">Nov 12</div>
												<h5>{e.title}</h5>
												<p>{e.body}</p>
											</div>

										</>
									)
								})}
						{/* <!-- EOF Post Content --> */}

						{/* <!-- Sidebar --> */}
						<div className="col-md-3 mb-5 mb-md-0">
							<div className="position-sticky" style={{ top: '2rem' }}>
								{/* <!-- Search --> */}
								<div className="card mb-3 rounded-0">
									<div className="card-header bg-light">Search</div>
									<div className="card-body">
										<div className="input-group ">
											<input
												type="text"
												className="form-control"
												placeholder="Enter Text"
												aria-describedby="button-addon2"
											/>
											<span className="input-group-text bg-light">
												<button
													className="btn m-0 p-0"
													type="submit"
													id="button-addon2"
												>
													<i className="bi bi-search"></i>
												</button>
											</span>
										</div>
									</div>
								</div>




								{/* <!-- EOF Search --> */}

								{/* <!-- Category Filter --> */}
								<div className="card mb-3 rounded-0">
									<div className="card-header bg-light">Category</div>
									<div className="list-group border-0 rounded-0">
										<Link
											href="#"
											className="list-group-item list-group-item-action"
										>
											Category 1
										</Link>
										<Link
											href="#"
											className="list-group-item list-group-item-action"
										>
											Category 2
										</Link>
										<Link
											href="#"
											className="list-group-item list-group-item-action"
										>
											Category 3
										</Link>
									</div>
								</div>
								{/* <!-- EOF Category Filter --> */}
							</div>
						</div>
						{/* <!-- EOF Sidebar --> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default Blog;

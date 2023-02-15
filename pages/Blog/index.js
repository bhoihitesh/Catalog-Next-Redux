import React, { useState } from 'react';
import Link from 'next/link';
import Banner from '../../Component/banner';
import { useEffect } from 'react';
import { useGetPostQuery } from '../Features/apiCall';
const Blogs = () => {
	const [api, setApi] = useState(5)
	const [getBlog, setBlog] = useState([])
	const { data, isLoading } = useGetPostQuery()

	// let loading = res.isLoading
	let loadmore = () => {
		setApi(api + 5)
	}
	useEffect(() => {
		{
			isLoading ?
				'' :
				setBlog(data.posts)
		}
	}, [data])
	let filterhistory = (catItem) => {

		let result = getBlog.filter((curData) => {
			return curData.tags[0] === catItem
		})

		setBlog(result)


	}
	console.log(getBlog)
	useEffect(() => {
		filterhistory()
	}, [])


	return (
		<>

			<Banner bannerTitle={"Blogs Page"} />
			<section id="pageContent" className="page-content py-5">
				<div className="container">
					<div className="row">
						{/* <!-- Post List Section --> */}
						<div className="col-md-9">
							{/* <!-- Blog List Section --> */}
							<div className="row">
								{isLoading
									?
									<div className=' text-center mt-5'>

										<img src="/loaders/giphy.gif" alt="txt" />
									</div>
									:
									getBlog.slice(0, api).map((e, i) => {
										return (
											<>
												<div>
													<div className="col-12" >
														<div className="card shadow rounded-0 mb-4" >
															<div className="row g-0">
																<div className="col-md-4">
																	<p className='text-center'>
																		<strong>{e.id}</strong>
																	</p>
																	<Link href={`Blog/${e.id}`}>
																		<img
																			src='/img/background-1.jpg'
																			className="img-fluid w-100 h-100"
																			alt="post title"
																		/>
																	</Link>
																</div>
																<div className="col-md-8">

																	<div className="card-body">
																		<h3 className="d-inline-block mb-2 text-primary">
																			{e.title}
																		</h3>
																		<Link
																			href={`Blog/${e.id}`}
																			className="text-dark text-decoration-none"
																		>
																			<h4>{e.tags[0]}</h4>
																			<p className="card-title text-capitalize mb-0" key={i}>
																				{e.body}
																			</p>

																		</Link>
																		<div className="mb-1 text-muted">Nov 12</div>
																		<p className="card-text" key={i}>
																			{e.description}
																		</p>
																		<Link
																			href={`Blog/${e.id}`}
																			className="btn btn-outline-primary"
																		>
																			Read More
																		</Link>
																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</>
										)
									})}

							</div>
							{/* <!-- EOF Blog List Section --> */}

							{/* <!-- Load More --> */}

							{isLoading
								?
								''
								:
								<div className="text-center">

									<button className="btn btn-outline-primary" onClick={loadmore}>
										Load More
									</button>



								</div>


							}


							{/* <!-- EOF Load More --> */}
						</div>
						{/* <!-- EOF Post List Section --> */}

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
										<button

											className="list-group-item list-group-item-action"
											onClick={() => filterhistory('history')}
										>
											history
										</button>
										<button

											className="list-group-item list-group-item-action"
											onClick={() => filterhistory('american')}
										>
											american
										</button>
										<button

											className="list-group-item list-group-item-action"
											onClick={() => filterhistory('crime')}
										>
											crime
										</button>
										<button

											className="list-group-item list-group-item-action"
											onClick={() => filterhistory('english')}
										>
											english
										</button>

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

export default Blogs;


import Link from 'next/link';
import { useEffect, useState } from 'react';
import Banner from '../Component/banner';
import ProductsPage from '../Component/ProductsPage';
import { useGetAllDataQuery } from './Features/apiCall';
import Myblogs from '../Component/Myblogs';
import Myblog from '../Component/Myblog';
import Newsletter from '../Component/Newsletter';
import Choosus from '../Component/Choosus';
import AboutComponent from '../Component/AboutComponent';

const Home = () => {
	const [products, setProducts] = useState([])

	const { data, isLoading } = useGetAllDataQuery()



	useEffect(() => {
		{ isLoading ? '' : setProducts(data.products) }
	}, [isLoading])
	return (
		<>
			<Banner banner_slug="Home page" />
			<AboutComponent />

			{/* -->Why Choos Us<-- */}
			<Choosus />

			{/* -->Products<-- */}
			<section
				id="homeFeaturedProducts"
				className="home-featured-products py-5"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="mb-4">Featured Products</h3>
						</div>
						{/* <!-- Featured Products List --> */}
						{
							isLoading
								?
								<div className=' text-center mt-5'>

									<img src="/loaders/giphy.gif" alt="txt" />
								</div>
								:
								products.slice(0, 4).map((e, i) => {
									return (
										<>

											<div className="col-md-6 col-lg-3 mb-4 mb-lg-0" key={e.id}>
												<ProductsPage id={e.id} title={e.title} brand={e.brand} price={e.price} />
											</div>
										</>
									)
								})
						}
						{/* <!-- EOF Featured Products List --> */}
						<div className="col-12 mt-4 text-center">
							<Link href="Product" className="btn btn-outline-primary">
								View All Products
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* -->Blog<-- */}
			<section id="homeFeaturedBlogs" className="home-featured-blogs bg-light py-5">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="mb-4">Featured Blogs</h3>
							<div className="row d-flex flex-row justify-content-center align-content-center">

								<div className="col-md-5">
									<Myblog />
								</div>
								<div className="col-md-7 mt-5">
									<Myblogs />


								</div>
								<div className="col-12 mt-4 text-center">
									<Link href="/Blog" className="btn btn-outline-primary">
										View All Blogs
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* -->News letter<-- */}
			<Newsletter />


		</>
	);
};

export default Home;

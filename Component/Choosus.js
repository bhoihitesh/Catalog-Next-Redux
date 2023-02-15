import Link from 'next/link'
import React from 'react'

const Choosus = () => {
    return (
        <>
            <section
                id="homeWhyChooseUs"
                className="home-why-choose-us-section py-5 bg-light"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-4 text-center">
                            <h3 className="p-0 m-0">Why Choose Us</h3>
                        </div>
                        <div className="col-md-4 mb-2 mb-md-0">
                            <div className="h1 d-inline-block">
                                <i className="bi-alarm"></i>
                            </div>
                            <h4>On Time Delivery</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
                                nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam a
                                mollis odio.
                            </p>
                        </div>
                        <div className="col-md-4 mb-2 mb-md-0">
                            <div className="h1 d-inline-block">
                                <i className="bi bi-key"></i>
                            </div>
                            <h4>Safe and secure</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
                                nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam a
                                mollis odio.
                            </p>
                        </div>
                        <div className="col-md-4 mb-2 mb-md-0">
                            <div className="h1 d-inline-block">
                                <i className="bi bi-headset"></i>
                            </div>
                            <h4>Excellent Customer Support</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
                                nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam a
                                mollis odio.
                            </p>
                        </div>
                        <div className="col-12 mt-0 mt-md-3 text-center">
                            <Link href="Product" className="btn btn-outline-primary">
                                Explore Our Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choosus

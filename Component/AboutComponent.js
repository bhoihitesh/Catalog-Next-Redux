import Link from 'next/link'
import React from 'react'

const AboutComponent = () => {
    return (
        <>
            <section id="homeAboutUs" className="home-about-us-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 order-md-2 mb-3 mb-md-0 text-center text-md-end">
                            <Link href="/about">
                                <img
                                    src="https://dummyimage.com/450x260/f8f9fa/6c757d.jpg"
                                    alt="About Us"
                                    className="img-fluid"
                                />
                            </Link>
                        </div>
                        <div className="col-md-7 order-md-1">
                            <h3>About Us</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
                                nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam a
                                mollis odio.
                            </p>
                            <p>
                                Suspendisse blandit leo molestie eleifend vehicula. Integer quis
                                bibendum lacus, vitae ultricies ante. Cras et tortor vel nulla
                                luctus auctor.
                            </p>
                            <p>
                                Nullam egestas libero elit, quis elementum tortor tincidunt eu.
                                Vivamus consequat orci erat, et eleifend mi posuere nec.
                                Vestibulum ultricies ornare feugiat.
                            </p>
                            <Link href="/about" className="btn btn-outline-primary">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutComponent

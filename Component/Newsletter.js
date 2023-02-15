import React from 'react'

const Newsletter = () => {
    return (
        <>
            <section id="newsLetter" className="catalog-newsletter my-5">
                <div className="container">
                    <div className="py-5 bg-light text-center">
                        <div className="row">
                            <div className="col-11 col-md-8 col-lg-5 mx-auto">
                                <span>Subscribe to Our</span>
                                <h3>Newsletter</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                    in nunc purus. Cras ut tempus diam, nec convallis mauris.
                                </p>
                                <form method="post">
                                    <div className="input-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            aria-label="Email"
                                            aria-describedby="button-addon2"
                                        />
                                        <span className="input-group-text">
                                            <button className="btn" type="submit" id="button-addon2">
                                                <i className="bi bi-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter

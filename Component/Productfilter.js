import React from 'react'

const Productfilter = () => {
    return (
        <>
            <div className="col-md-3 mb-5 mb-md-0">
                <h3 className="mb-4">Filter By</h3>

                <form method="get">
                    {/* <!-- Product Search --> */}
                    <div className="card mb-3 rounded-0">
                        <div className="card-header bg-light">Product Search</div>
                        <div className="card-body">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Product Search"
                            />
                        </div>
                    </div>
                    {/* <!-- EOF Product Search --> */}

                    {/* <!-- Price Filter --> */}
                    <div className="card mb-3 rounded-0">
                        <div className="card-header bg-light">Price</div>
                        <div className="card-body">
                            <div className="input-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Min"
                                />
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Max"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <!-- EOF Price Filter --> */}

                    {/* <!-- Category Filter --> */}
                    <div className="card mb-3 rounded-0">
                        <div className="card-header bg-light">Category</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                Category 1
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                Category 2
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                Category 3
                            </li>
                        </ul>
                    </div>
                    {/* <!-- EOF Category Filter --> */}

                    {/* <!-- Color Filter --> */}
                    <div className="card mb-3 rounded-0">
                        <div className="card-header bg-light">Color</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                Red
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                Green
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                Blue
                            </li>
                        </ul>
                    </div>
                    {/* <!-- EOF Color Filter --> */}

                    {/* <!-- Size Filter --> */}
                    <div className="card mb-3 rounded-0">
                        <div className="card-header bg-light">Size</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                S
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                M
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                L
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                XL
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                />
                                XXL
                            </li>
                        </ul>
                    </div>
                    {/* <!-- EOF Size Filter --> */}

                    <button type="submit" className="btn btn-outline-primary">
                        Apply Filter
                    </button>
                </form>
            </div>
        </>
    )
}

export default Productfilter

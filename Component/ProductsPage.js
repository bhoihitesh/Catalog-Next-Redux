import Link from "next/link"



const ProductsPage = (props) => {
    return (
        <>

            <div className="card shadow rounded-0 m-3" key={props.key}>
                <Link href={`/Product/${props.id} `}>
                    <img
                        src='/img/background-1.jpg'
                        className="card-img-top"
                        alt="Product title"
                    />
                </Link>
                <div className="card-body">
                    <p>{props.id}</p>
                    <Link
                        href={`/Product/${props.id} `}
                        className="text-dark text-decoration-none"
                    >
                        <h4 className="card-title text-capitalize">
                            {props.title}
                        </h4>
                        <h5>{props.brand}</h5>
                    </Link>

                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <small className="text-muted">
                            <b>Price:</b>
                            <span className="float-end">₹{props.price}</span>
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
                <div className="card-body">
                    <Link
                        href={`/Product/${props.id} `}
                        className="btn btn-outline-primary"
                    >
                        View Product
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ProductsPage


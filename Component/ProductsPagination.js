import Link from "next/link"
import { useEffect, useState } from "react"

const ProductsPagination = ({ pagecounter, onPagechange }) => {
    let [counter, setCounter] = useState(1)
    useEffect(() => {
        let value = pagecounter * counter;
        onPagechange(value - pagecounter, value)
        console.log("start: ", value - pagecounter);
        console.log("end: ", value);

    }, [counter])
    return (

        <>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" onClick={() => setCounter(counter - 1)}>Previous</button>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active">
                        <span class="page-link">
                            2
                        </span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <button class="page-link" onClick={() => setCounter(counter + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default ProductsPagination

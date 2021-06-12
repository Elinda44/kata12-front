import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function OrderBook() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/books/")
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => {

            })
    })
    return (
        <div>
            <div className="books mt-5">
                <div className="row">
                    {books?.map((el, key) => {
                        return (
                                <div key={key} className="links col-md-4 mt-2">
                                    <Link to={`/order_book/${el._id}`}>
                                        <div className="singleBook">
                                            <h2>{el.name}</h2>
                                            <b>{el.author}</b>
                                            <p>{el.qty} available</p>
                                        </div>
                                    </Link>
                                </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default OrderBook;

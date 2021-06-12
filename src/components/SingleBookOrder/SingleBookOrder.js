import {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";
function Books() {
    const {id} = useParams();
    const [singleBook, setSingleBook] = useState({})
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const qty = e.target.qty.value;
        axios.post("http://localhost:5000/books/sell",{book_id:id,qty: qty})
        .then(data => {
            history.push('/order_book');
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/books/getsingle/${id}`)
        .then(res => {
            setSingleBook(res.data);
            console.log("SINGLE", res.data);
        })
    },[]);
  return (
      <div className="book mt-5">
            <h1>{singleBook?.name}</h1>
            <h3>{singleBook?.author}</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="number" name="qty" className="form-control"/>
                <input type="submit" value="Order" className="btn btn-success mt-3"/>
            </form>
      </div>
  );
}
export default Books;

import {useEffect, useState} from "react";
import axios from "axios";
import "./Books.css";
function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/books/getsoldbooks/everyhour")
        .then(res => {
            setBooks(res.data);
            console.log(res.data);
        })
        .catch(err => {

        })
    },[])
  return (
      <div className="books mt-5">
          <div className="row">
              {books?.map((el,key) => {
                  return(
                        <div key={key} className="col-md-4">
                            <div className="singleBook">
                                <h2>{el.book_name}</h2>
                                <b>{el.book_author}</b>
                                <p>{el.qty_sold} pcs sold</p>
                            </div>
                        </div>
                  )
              })}
          </div>
      </div>
  );
}
export default Books;

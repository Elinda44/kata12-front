
import {Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./components/Books/Books";
import OrderBook from "./components/OrderBook/OrderBook";
import SingleBookOrder from "./components/SingleBookOrder/SingleBookOrder";
import "./main.css";

function App() {
  return (
    <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="navbar">
                <ul>
                  <li><Link to="/books">Books</Link></li>
                  <li><Link to="/order_book">Order Book</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Switch>
                <Route path="/books" component={Books}/>
                <Route path="/order_book" exact component={OrderBook}/>
                <Route path="/order_book/:id" exact component={SingleBookOrder}/>
              </Switch>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
    </Router>
  );
}

export default App;

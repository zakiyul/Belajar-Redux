import React from "react";
import Toko from "./components/toko";
import Cart from "./components/cart";
import Api from "./components/callApi";

function App() {
  return (
    <div className="App mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <Toko />
          </div>
          <div className="col-md-4">
            <Cart />
            <Api />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

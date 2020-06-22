import React from "react";
import Produks from "./produk.json";
import { useDispatch } from "react-redux";
import { tambah, kurang } from "../action";

function Toko() {
  const dis = useDispatch();
  //col-md-6

  return (
    <div className="card border-0">
      <h1 className="text-center">TOKO</h1>
      <div className="container">
        <div className="row ml-5">
          {Produks.map((produk) => (
            <div className="col-md-6">
              <div
                className="card shadow-sm mt-3 mb-3"
                style={{ width: "18rem" }}
              >
                <img
                  class="card-img-top"
                  src={produk.img}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{produk.nama}</h5>
                  <p className="card-text">Harga : Rp. {produk.harga}</p>
                  <p className="card-text">Stok : {produk.stok}</p>
                  <button
                    onClick={() => dis(tambah(produk.harga))}
                    className="btn btn-warning"
                  >
                    Beli
                  </button>
                  <button
                    onClick={() => dis(kurang(produk.harga))}
                    className="btn btn-danger ml-2"
                  >
                    Ndk Jadi Bro
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toko;

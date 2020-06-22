import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { kurang } from "../action";

function Cart() {
  const pilihan = useSelector((state) => state.pilihan);
  const total = useSelector((state) => state.total);
  const dis = useDispatch();

  return (
    <div className="card border-0 container">
      <h1 className=" text-center">CART</h1>
      <p>Pilihan : {pilihan}</p>
      <p>Total : Rp. {total}</p>
    </div>
  );
}

export default Cart;

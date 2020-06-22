import { combineReducers } from "redux";
import Pilihan from "./dipilih";
import Total from "./total";

const allReducers = combineReducers({
  pilihan: Pilihan,
  total: Total,
});

export default allReducers;

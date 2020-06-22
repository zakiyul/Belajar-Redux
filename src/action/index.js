export const tambah = (nr) => {
  return {
    type: "TAMBAH",
    payload: nr,
  };
};

export const kurang = (nr) => {
  return {
    type: "KURANG",
    payload: nr,
  };
};

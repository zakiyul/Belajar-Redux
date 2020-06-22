import React, { useState, useEffect } from "react";

function PanggilApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setData(data));
  });
  console.log(data);
  return (
    <div className="bg-white mt-4 p-3">
      {data.map((d) => (
        <div className="">
          <p>{d.name}</p>
          <p>{d.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PanggilApi;

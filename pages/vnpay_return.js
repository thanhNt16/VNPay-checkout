import React, { useEffect, useState } from "react";
import axios from "axios";

export default function vnpay_return() {
  const [valid, setvalid] = useState(false);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search);
    // const myParam = urlParams.get('vnp_SecureHash');
    // console.log(myParam)
    async function checkSum() {
      const x = await axios({
        method: "post",
        url: `/api/vnpay_return${window.location.search}`,
      });
      x.data.code === "00" ? setvalid(true) : setvalid(false);
      setloading(false);
    };

    checkSum();
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{valid ? "Success" : "Error"}</div>
      )}
    </div>
  );
}

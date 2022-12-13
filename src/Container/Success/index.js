import { BsFillCheckCircleFill } from "react-icons/bs";

import { useSelector } from "react-redux";

const Success = () => {
  const ValidasiMpin = useSelector((state) => state.ValidasiMpin);

  return (
    <>
      <div className="container-success">
        <div className="container-success-conten">
          <BsFillCheckCircleFill color="#0d47a1" size={68} />
          <div className="success-title">
            {!ValidasiMpin.data?.message
              ? "Transaksi Anda Berhasil Diproses"
              : ValidasiMpin.data?.message}
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;

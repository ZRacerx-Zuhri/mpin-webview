import { useSelector } from "react-redux";
import { GiCancel } from "react-icons/gi";

const Failed = () => {
  const ValidasiMpin = useSelector((state) => state.ValidasiMpin);
  console.log(ValidasiMpin.data);
  return (
    <>
      <div className="container-failed">
        <div className="container-failed-conten">
          <GiCancel color="#d50000" size={68} />
          <div className="failed-title">
            {!ValidasiMpin.data?.message
              ? ValidasiMpin.data
                ? ValidasiMpin.data
                : "Terjadi Kesalahan!!!"
              : ValidasiMpin.data?.message}
          </div>
        </div>
      </div>
    </>
  );
};

export default Failed;

import { useSelector, useDispatch } from "react-redux";
import { GiCancel } from "react-icons/gi";
import { useParams } from "react-router-dom";
import logo from "../../Assets/Oylogo.svg";
import { ValidasiMpinApi } from "../../Redux/Reducer/VerifikasiMpin";

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

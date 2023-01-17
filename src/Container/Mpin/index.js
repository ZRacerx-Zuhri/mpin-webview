/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../Assets/Oylogo.svg";
import {
  resetValidasiMpin,
  ValidasiMpinApi,
} from "../../Redux/Reducer/VerifikasiMpin";
import { Oval } from "react-loading-icons";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "clear"];

const initialPin = { a: "", b: "", c: "", d: "", e: "", f: "" };
const Mpin = () => {
  const navigate = useNavigate();
  let { no_rek, no_hp, bpr_id, amount, trx_code, tgl_trans, rrn } = useParams();
  const ValidasiMpin = useSelector((state) => state.ValidasiMpin);
  const dispatch = useDispatch();
  const [pin, setPin] = useState({ ...initialPin });

  // console.log(no_rek, no_hp, bpr_id, amount, trx_code, tgl_trans, rrn);
  // console.log(ValidasiMpin);
  // console.log(Object.values(pin).join(""));

  useEffect(() => {
    if (Object.values(pin).join("").length === Object.keys(pin).length) {
      dispatch(
        ValidasiMpinApi({
          no_hp,
          bpr_id,
          no_rek,
          tgl_trans,
          trx_code,
          rrn,
          pin: parseInt(Object.values(pin).join("")) * 2 + 999999 - 111111,
        })
      );

      // console.log(Object.values(pin).join(""));
    }
  }, [pin]);

  useEffect(() => {
    if (ValidasiMpin.success) {
      // console.log(ValidasiMpin.data);
      navigate(`/success/${ValidasiMpin.data.data.token_mpin}`);
    }

    if (ValidasiMpin.failed && ValidasiMpin.data?.code === "006") {
      setPin(initialPin);
    } else if (ValidasiMpin.failed) {
      navigate(`/failed`);
    }
  }, [ValidasiMpin.success, ValidasiMpin.failed]);
  const onEnterPin = (btn) => {
    if (ValidasiMpin.failed && ValidasiMpin.data?.code === "006") {
      dispatch(resetValidasiMpin());
    }
    if (typeof btn === "number") {
      for (let i = 0; i < Object.keys(pin).length; i += 1) {
        let key = Object.keys(pin)[i];
        if (!pin[key]) {
          const newPin = { ...pin };
          newPin[key] = btn.toString();
          setPin(newPin);
          break;
        }
      }
    } else {
      if (btn === "clear") {
        for (let i = 0; i < Object.keys(pin).length; i += 1) {
          let key = Object.keys(pin).reverse()[i];

          if (pin[key]) {
            // console.log(pin[key]);
            const newPin = { ...pin };
            newPin[key] = "";
            setPin(newPin);
            break;
          }
        }
      }
    }
  };

  return (
    <>
      <div className="container-mpin">
        {!ValidasiMpin.fetching ? null : (
          <div className="loading-process">
            <div className="conten-load">
              <Oval stroke="#0d47a1" strokeWidth={3} height={50} />
              <div className="title-load">Mohon Tunggu</div>
            </div>
          </div>
        )}
        <img src={logo} alt="Oy" width={65} className="logo-oy" />
        <div className="conten-title">Masukan mPIN iBPR Anda</div>
        <div className="container-dot">
          {Object.keys(pin).map((pinKey, idx) =>
            pin[pinKey] ? (
              <span key={idx} className="dot-color"></span>
            ) : (
              <span
                key={idx}
                className={`dot ${
                  ValidasiMpin.failed && ValidasiMpin.data?.code === "006"
                    ? "dot-danger"
                    : "dot"
                }`}
              ></span>
            )
          )}
        </div>
        {ValidasiMpin.failed && ValidasiMpin.data?.code === "006" ? (
          <div className="error-message">{ValidasiMpin.data?.message}</div>
        ) : null}

        <div className="container-keynumber">
          {data.map((val, idx) => {
            return val === "" ? null : (
              <button
                key={idx}
                className={`pad-number pad-number${idx}`}
                onClick={() => {
                  onEnterPin(val);
                }}
              >
                {val === "clear" ? <FiDelete /> : val}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mpin;

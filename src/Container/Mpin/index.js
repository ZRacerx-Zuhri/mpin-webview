import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useParams } from "react-router-dom";
import logo from "../../Assets/Oylogo.svg";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "clear"];

const initialPin = { a: "", b: "", c: "", d: "", e: "", f: "" };
const Mpin = () => {
  let { no_rek, no_hp, bpr_id, reff, amount, tgl_trans } = useParams();

  console.log(no_rek, no_hp, bpr_id, reff, amount, tgl_trans);
  const [pin, setPin] = useState({ ...initialPin });

  useEffect(() => {
    if (Object.values(pin).join("").length === Object.keys(pin).length) {
      console.log(Object.values(pin).join(""));
    }
  }, [pin]);

  const onEnterPin = (btn) => {
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
        <img src={logo} alt="Oy" width={65} className="logo-oy" />
        <div className="conten-title">Masukan mPIN iBPR Anda</div>
        <div className="container-dot">
          {Object.keys(pin).map((pinKey, idx) =>
            pin[pinKey] ? (
              <span key={idx} className="dot-color"></span>
            ) : (
              <span key={idx} className="dot"></span>
            )
          )}
        </div>

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

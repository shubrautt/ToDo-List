import { useState } from "react";
const Locker = ({ handleLogin }) => {
  const password = "1234";
  const iconName = "fa-circle";
  let [enterpassword, setEnterpassword] = useState("");
  let [dots, setdots] = useState(["far", "far", "far", "far"]);

  console.log("😎😎😎😎😎😎");
  console.log("PassWord: Ek Do Teen Char");
  console.log("😎😎😎😎😎😎");

  const handlePassword = (e) => {
    let newPassword = (enterpassword += e.target.value);
    if (password === enterpassword) {
      console.log("hits");
      handleLogin(true);
    } else if (enterpassword.length === 4 && password !== enterpassword) {
      var dotContainer = document.getElementById("dots");
      console.log(dotContainer);
      dotContainer.style.animation = "dotanim 0.2s linear";
      setTimeout(() => {
        dotContainer.removeAttribute("style");
      }, 200);
    }

    if (enterpassword.length === 4) {
      setEnterpassword("");
      setdots(["far", "far", "far", "far"]);
    } else {
      setEnterpassword(newPassword);
    }
    for (var i = 0; i < enterpassword.length; i++) {
      dots[i] = "fas";
    }
  };

  return (
    <div className="locker">
      <div className="row">
        <p>Enter Passcode</p>
        <div className="dots" id="dots">
          <i className={dots[0] + " " + iconName}></i>
          <i className={dots[1] + " " + iconName}></i>
          <i className={dots[2] + " " + iconName}></i>
          <i className={dots[3] + " " + iconName}></i>
        </div>
      </div>
      <div className="row">
        <button value="1" onClick={handlePassword}>
          1
        </button>
        <button value="2" onClick={handlePassword}>
          2
        </button>
        <button value="3" onClick={handlePassword}>
          3
        </button>
      </div>
      <div className="row">
        <button value="4" onClick={handlePassword}>
          4
        </button>
        <button value="5" onClick={handlePassword}>
          5
        </button>
        <button value="6" onClick={handlePassword}>
          6
        </button>
      </div>
      <div className="row">
        <button value="7" onClick={handlePassword}>
          7
        </button>
        <button value="8" onClick={handlePassword}>
          8
        </button>
        <button value="9" onClick={handlePassword}>
          9
        </button>
      </div>
      <div className="row">
        <button value="0" onClick={handlePassword}>
          0
        </button>
      </div>
      <p style={{ fontSize: "0.7em" }}>HINT: NEPO ELOSNOC</p>
    </div>
  );
};

export default Locker;

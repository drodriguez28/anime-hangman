import React from "react";

const PictureHints = ({ selectedWord }) => {
  const displayPic = () => {
    if (selectedWord === "eren") {
      return <img src="/images/eren.jpg" alt="" />;
    }
    if (selectedWord === "levi") {
      return <img src="/images/levi.jpg" alt="" />;
    }
    if (selectedWord === "naruto") {
      return <img src="/images/naruto.jpg" alt="" />;
    }
    if (selectedWord === "itachi") {
      return <img src="/images/itachi.jpg" alt="" />;
    }
    if (selectedWord === "sasuke") {
      return <img src="/images/sasuke.jpg" alt="" />;
    }
    if (selectedWord === "deku") {
      return <img src="/images/deku.jpg" alt="" />;
    }
    if (selectedWord === "light") {
      return <img src="/images/light.jpg" alt="" />;
    }
    if (selectedWord === "ryuk") {
      return <img src="/images/ryuk.jpg" alt="" />;
    }
    if (selectedWord === "mikasa") {
      return <img src="/images/mikasa.jpg" alt="" />;
    }
    if (selectedWord === "edward") {
      return <img src="/images/edward.jpg" alt="" />;
    }
    if (selectedWord === "meliodas") {
      return <img src="/images/meliodas.jpg" alt="" />;
    }

    if (selectedWord === "asta") {
      return <img src="/images/asta.jpg" alt="" />;
    }
    if (selectedWord === "yuno") {
      return <img src="/images/yuno.jpg" alt="" />;
    }

    if (selectedWord === "lelouch") {
      return <img src="/images/lelouch.jpg" alt="" />;
    }

    if (selectedWord === "gon") {
      return <img src="/images/gon.jpg" alt="" />;
    }

    if (selectedWord === "killua") {
      return <img src="/images/killua.jpg" alt="" />;
    }

    if (selectedWord === "thorfinn") {
      return <img src="/images/thorfinn.jpg" alt="" />;
    }

    if (selectedWord === "gojo") {
      return <img src="/images/gojo.jpg" alt="" />;
    }

    if (selectedWord === "itadori") {
      return <img src="/images/itadori.jpg" alt="" />;
    }
  };

  return <div>{displayPic()}</div>;
};
export default PictureHints;

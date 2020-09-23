import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const cinta = "Joice";
const panggil = <p>Hai sayangku {cinta} </p>;
const tanya = <p>Kamu lagi apa sayangku ? </p>;
let ulang = 0;

ReactDOM.render(
  panggil,
  document.getElementById("test")
);
ReactDOM.render(
  tanya,
  document.getElementById("tanya")
);

function tampil(){
  ulang++;
  const show = <p>{ulang}</p>;
  ReactDOM.render(
    show,
    document.getElementById("he")
  )
}
setInterval(tampil, 1000);
/* FUNCION ENCODE --> CODIFICA EN BASE 64 LA CADENA */
function EncodeIdUser(params_iduser) {
  window.localStorage.setItem("idusercurrent", window.btoa(params_iduser));
}

/* FUNCION DECODE --> DECODIFICA LA CADENA BASE 64 Y LA RETORNA  */
function DecodeIdUser() {
  return window.atob(window.localStorage.getItem("idusercurrent"));
}

/* FUNCION ENCODE --> CODIFICA NRO DE CUENTA EMISORA*/
function EncodeNroCuenta(nrocuenta) {
  window.localStorage.setItem("minumerodecuenta", window.btoa(nrocuenta));
}
/* FUNCION DECODE --> DECODIFICA NRO DE CUENTA EMISORA*/
function DecodeNroCuenta() {
  return window.atob(window.localStorage.getItem("minumerodecuenta"));
}
/* FUNCION DECODE --> DECODIFICA NRO DE CUENTA EMISORA*/
module.exports = {

  
  REACT_APP_URL_BASE: "https://bcpnotify.ml",
  REACT_APP_URL_BASE_BACKEND: "https://bcpnotify.herokuapp.com",
  EncodeIdUser,
  DecodeIdUser,
  EncodeNroCuenta,
  DecodeNroCuenta,
};

/*

  REACT_APP_URL_BASE: "http://localhost:3000",
  REACT_APP_URL_BASE_BACKEND: "http://localhost:5001",

  REACT_APP_URL_BASE: "https://bcpnotify.ml",
  REACT_APP_URL_BASE_BACKEND: "https://bcpnotify.herokuapp.com",



*/

/* FUNCION ENCODE --> CODIFICA EN BASE 64 LA CADENA */
function Encode(params_iduser) {
  window.localStorage.setItem("idusercurrent", window.btoa(params_iduser));
}

/* FUNCION ENCODE --> DECODIFICA LA CADENA BASE 64 Y LA RETORNA  */
function Decode() {
  return window.atob(window.localStorage.getItem("idusercurrent"));
}
module.exports = {
  REACT_APP_URL_BASE: "https://bcpnotify.ml",
  REACT_APP_URL_BASE_BACKEND: "https://bcpnotify.herokuapp.com",
  Encode,
  Decode,
};

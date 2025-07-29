import nav from "./componentes/nav"

function styles_navbar(){

}




function App() {

  return (
    <>
      <div className="header-nav">
        <img src="../imagenes/imgLogo" alt="imagen logo app"></img>
        <input type="text" className="serch-navbar" name="buscador-nav" data-id="buscador" placeholder="que buscabas?"/>
        <button>buscar</button>
        <ul className="header-nav-ul">
            <li className="header-nav-ul-li"><a className="header-nav-ul-li-a" href="#">hombre</a></li>
            <li className="header-nav-ul-li"><a className="header-nav-ul-li-a" href="#">mujer</a></li>
            <li className="header-nav-ul-li"><a className="header-nav-ul-li-a" href="#">log in</a></li>
            <li className="header-nav-ul-li"><a className="header-nav-ul-li-a" href="#">carrito</a></li>
        </ul>
      </div>
    </>
  );
}

export default App;


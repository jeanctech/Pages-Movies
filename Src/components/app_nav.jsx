import "../styles/app.css";

function App_Nav() {
  return (
    <>
      <div
        className="m-0.5 p-0.5 flex flex-col flex-[50%] justify-between items-center" >
        <ul
          className="m-1 p-1 flex flex-row justify-center items-center bg-[#312e2e] text-slate-300 rounded-lg" >
          <li
            className="m-1 p-1 cursor-pointer hover:bg-[#5c5757] rounded-lg" >
            Inicio
          </li>{" "}
          <span className="text-[#696868]">|</span>
          <li
            className="m-1 p-1 cursor-pointer hover:bg-[#5c5757] rounded-lg" >
            Series
          </li>{" "}
          <span className="text-[#696868]">|</span>
          <li
            className="m-1 p-1 cursor-pointer hover:bg-[#5c5757] rounded-lg" >
            En Estreno
          </li>{" "}
          <span className="text-[#696868]">|</span>
          <li
            className="m-1 p-1 cursor-pointer hover:bg-[#5c5757] rounded-lg" >
            Películas
          </li>{" "}
          <span className="text-[#696868]">|</span>
          <li
            className="m-1 p-1 cursor-pointer hover:bg-[#5c5757] rounded-lg" >
            Acerca
          </li>
        </ul>
        <label
          className="m-1 p-1 flex flex-row justify-center items-center bg-[#312d2d] text-slate-300 rounded-lg" >
          <input
            type="search"
            placeholder="Escribe Aqui"
            className="m-1 p-1 rounded-lg bg-[#524d4d]" >
          </input>
          <button type="button" className="m-1 p-1 bg-[#5a5252]" >
            Buscar
          </button>
        </label>
      </div>
    </>
  );
}

export default App_Nav;

import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [color, setColor] = useState('#000');
  const [rows, changeRows] = useState(5);
  const [cols, changeCols] = useState(3);
  const inputRow = (e) => {
    changeRows(e.target.value);
  };

  const inputColumn = (e) => {
    changeCols(e.target.value);
  };

  return (
    <div className="App">
      <section className="mt-5">
        <div className="w-25 mx-auto text-center mb-5">
          <label>Filas</label>
          <br />
          <input
            type="number"
            placeholder="Nro rows"
            className=" mx-auto"
            value={rows}
            onChange={inputRow}
          />
        </div>
        <div className="w-25 mx-auto text-center mb-5">
          <label>Columnas</label>
          <br />
          <input
            type="number"
            placeholder="Nro rows"
            className=" mx-auto"
            value={cols}
            onChange={inputColumn}
          />
        </div>
        <Table matrix={[rows, cols]} color={color} />
        <p
          className="text-center text-white my-3 w-50 mx-auto"
          style={{ backgroundColor: `${color}` }}
          key="4"
        >
          <h1>Color selected: {color}</h1>
        </p>
        <div className="row center">
          <button
            className="col-3 h-25 w-25 text-center text-white"
            style={{ backgroundColor: '#000' }}
            onClick={() => setColor('#000')}
            key="1"
          >
            color: #000
          </button>
          <button
            className="col-3 h-25 w-25 text-center text-whit"
            style={{ backgroundColor: '#0067d4' }}
            onClick={() => setColor('#0067d4')}
            key="2"
          >
            color: #0067d4
          </button>
          <button
            className="col-3 h-25 w-25 text-center text-white"
            style={{ backgroundColor: '#28c335' }}
            onClick={() => setColor('#28c335')}
            key="3"
          >
            color: #28c335
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

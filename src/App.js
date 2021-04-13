import React from "react";

import "./App.css";
import { SimuladorApp } from "./components/SimuladorApp";

function App() {
    return (
        <div className="container bg-gradient-container">
            <h1 className="text-center lighter">Simulá tú crédito</h1>
            <SimuladorApp />
        </div>
    );
}

export default App;

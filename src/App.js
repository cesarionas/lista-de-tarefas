import "./App.css";
import React, { useState } from "react";
import ListaTarefasContext from "./services/ListaTarefas/ListaTarefasContext";
import ListaTarefasPage from "./components/ListaTarefasPage";
import { listaTarefasContextBuilder } from "./services/ListaTarefas/ListaTarefasService";

function App() {
  const controleDeTarefas = listaTarefasContextBuilder(useState([]));
  return (
    <div className="App">
      <div className="App">
        <ListaTarefasContext.Provider value={controleDeTarefas}>
          <ListaTarefasPage />
        </ListaTarefasContext.Provider>
      </div>
    </div>
  );
}

export default App;

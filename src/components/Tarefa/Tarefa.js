import React from "react";
import useListaTarefas from "../../services/ListaTarefas/useListaTarefas";
import "./Tarefa.css";

function Tarefa(props) {
  const { atulizarStatus } = useListaTarefas();
  let classNameTarefa = "tarefa";

  if (props.tarefa.concluida) {
    classNameTarefa += "concluida";
  }

  function checkboxOnChange() {
    atulizarStatus(props.tarefa);
  }
  return (
    <div className="tarefa-wrapper">
      <div className={classNameTarefa}>{props.tarefa.descricao}</div>
      <input
        className="checkbox"
        type="checkbox"
        defaultChecked={props.tarefa.concluida}
        onChange={checkboxOnChange}
      />
    </div>
  );
}
export default Tarefa;

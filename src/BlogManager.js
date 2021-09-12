import { useState } from "react";
import CreateForm from "./ManagerForms/CreateForm";
import UpdateForm from "./ManagerForms/UpdateForm";
import DeleteForm from "./ManagerForms/DeleteForm";
function BlogManager() {
  const [managerAction, setManagerAction] = useState("");
  return (
    <div className="manager-container">
      <p>{managerAction}</p>
      <form>
        <label>
          Alege o actiune
          <select
            id="manager-action"
            name="manager-action"
            onChange={(e) => setManagerAction(e.target.value)}
          >
            <option value="">-</option>
            <option value="create">Creeaza o postare</option>
            <option value="update">Modifica o postare</option>
            <option value="delete">Elimina o postare</option>
          </select>
        </label>
        {managerAction === "create" && <CreateForm />}
        {managerAction === "update" && <UpdateForm />}
        {managerAction === "delete" && <DeleteForm />}
        <button type="submit">TRIMITE</button>
      </form>
    </div>
  );
}

export default BlogManager;

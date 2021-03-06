import { useState } from "react";
import CreateForm from "./ManagerForms/CreateForm";
import UpdateForm from "./ManagerForms/UpdateForm";
import DeleteForm from "./ManagerForms/DeleteForm";
import getTodaysDateRomanian from "./getTodaysDateRomanian";
import { useHistory } from "react-router-dom";
import "./styles/manager.css";
function BlogManager(props) {
  const URL = props.URL;
  // const { data: posts, isLoading, error } = props.fetchData;
  const [managerAction, setManagerAction] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (managerAction === "create") {
      HandleCreate(e);
    }
    if (managerAction === "delete") {
      handleDelete(e);
    }
    if (managerAction === "update") {
      handleUpdate(e);
    }
    history.push("/");
    window.location.reload();
  };
  const HandleCreate = (e) => {
    const blog = {
      title: e.target.title.value,
      image: e.target.image.value,
      date: getTodaysDateRomanian(),
      author: e.target.author.value,
      article: e.target.article.value,
    };
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
  };
  const handleDelete = (e) => {
    const blogId = document.getElementById("delete-blog").value;
    fetch(URL + blogId, { method: "DELETE" });
  };
  const handleUpdate = (e) => {
    const blogId = document.getElementById("update-blog").value;
    const blog = {
      title: e.target["update-title"].value,
      image: e.target["update-image"].value,
      date: getTodaysDateRomanian(),
      author: e.target["update-author"].value,
      article: e.target["update-article"].value,
    };
    fetch(URL + blogId, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
  };
  return (
    <div className="manager">
      <form className="manager__form" onSubmit={handleSubmit}>
        <label className="manager__action-chooser">
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
        {managerAction === "update" && (
          <UpdateForm fetchData={props.fetchData} />
        )}
        {managerAction === "delete" && (
          <DeleteForm fetchData={props.fetchData} />
        )}
        <button type="submit" className="post__button">
          TRIMITE
        </button>
      </form>
    </div>
  );
}

export default BlogManager;

function CreateForm() {
  return (
    <div className="manager__create">
      <label>
        Titlul cartii
        <input type="text" required name="title"></input>
      </label>
      <label>
        Imagine
        <input type="text" required name="image"></input>
      </label>
      <label>
        Autor
        <input type="text" required name="author"></input>
      </label>
      <label>
        Articol
        <textarea
          required
          name="article"
          rows="20"
          cols="100"
          className="manager__article"
        ></textarea>
      </label>
    </div>
  );
}

export default CreateForm;

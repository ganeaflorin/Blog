function CreateForm() {
  return (
    <div>
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
        <input type="textarea" required name="article"></input>
      </label>
    </div>
  );
}

export default CreateForm;

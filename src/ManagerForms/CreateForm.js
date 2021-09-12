function CreateForm() {
  return (
    <div>
      <label>
        Titlul cartii
        <input type="text" required></input>
      </label>
      <label>
        Imagine
        <input type="text" required></input>
      </label>
      <label>
        Autor
        <input type="text" required></input>
      </label>
      <label>
        Articol
        <input type="textarea" required></input>
      </label>
    </div>
  );
}

export default CreateForm;

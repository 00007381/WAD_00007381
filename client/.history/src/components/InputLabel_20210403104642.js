const InputLabel = (props) => {
  return (
    <label>
      {props.name}
      <input type="text" name="name" />
    </label>
  );
};

export default InputLabel;

const InputLabel = (props) => {
  return (
    <label>
      {props.name}
      <input type="text" ref={props.ref} />
    </label>
  );
};

export default InputLabel;

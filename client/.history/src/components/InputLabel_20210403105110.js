const InputLabel = (props) => {
  return (
    <label>
      {props.name}
      <input type="text" ref={props.ref} className=" w-full" />
    </label>
  );
};

export default InputLabel;

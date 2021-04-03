const InputLabel = (props) => {
  return (
    <label>
      {props.name}
      <input type="text" ref={props.ref} className=" w-full bg-blue-100" />
    </label>
  );
};

export default InputLabel;

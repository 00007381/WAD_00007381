const InputLabel = (props) => {
  return (
    <label>
      {props.name}
      <input
        type="text"
        ref={props.ref}
        className=" w-full bg-blue-100 p-2 rounded-lg"
      />
    </label>
  );
};

export default InputLabel;

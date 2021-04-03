const InputLabel = (props) => {
  return (
    <label>
      {props.name}
      <input
        type="text"
        ref={props.ref}
        className=" w-full bg-gray-400 p-2 rounded-lg"
      />
    </label>
  );
};

export default InputLabel;

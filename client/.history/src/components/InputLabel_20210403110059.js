const InputLabel = (props) => {
  return (
    <label className="text-xl">
      {props.name}
      {props.isRequired && " *"}
      <input
        type="text"
        ref={props.ref}
        className=" w-full bg-blue-50 border-2 border-blue-300 p-2 rounded"
      />
    </label>
  );
};

export default InputLabel;

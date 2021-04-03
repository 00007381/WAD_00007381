const InputLabel = (props) => {
  return (
    <label className="text-xl">
      {props.name}
      {props.isRequired && " *"}
      <input
        type="text"
        ref={props.ref}
        className=" w-full bg-gray-100 border border-blue-500 p-2 rounded"
      />
    </label>
  );
};

export default InputLabel;

const InputLabel = (props) => {
  return (
    <label className="text-xl">
      {props.name}:
      <input
        type="text"
        ref={props.ref}
        className=" w-full bg-gray-200 p-2 rounded"
      />
    </label>
  );
};

export default InputLabel;

const InputLabel = (props) => {
  return (
    <label className="block text-xl">
      {props.name}
      {props.isRequired && " *"}
      <input
        type="text" {props.isNumber ? "number" : "text"}
        ref={props.titleRef}
        className=" w-full bg-blue-50 border border-blue-300 p-2 rounded mt-1"
      />
    </label>
  );
};

export default InputLabel;

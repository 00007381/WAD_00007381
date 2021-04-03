const InputLabel = (props) => {
  return (
    <label className="block text-xl">
      {props.name}
      {props.isRequired && " *"}
      <input
        value={props.state}
        onChange={(e) => props.setState(e.target.value)}
        placeholder={props.holder}
        type={props.isNumber ? "number" : "text"}
        className=" w-full bg-blue-50 border border-blue-300 p-2 rounded mt-1"
      />
    </label>
  );
};

export default InputLabel;

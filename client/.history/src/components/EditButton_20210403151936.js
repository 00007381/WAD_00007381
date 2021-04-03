const EditButton = ({ id }) => {
  return (
    <button
      onClick={onDelete}
      class="bg-red-300 shadow-lg hover:bg-red-400 text-red-500 font-semibold py-2 
    px-4 rounded w-full inline-flex justify-center items-center  text-2xl"
    >
      {deleteIcon}
      <span>Delete</span>
    </button>
  );
};

export default EditButton;

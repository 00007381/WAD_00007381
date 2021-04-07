const DeleteButton = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      class="bg-white border-2 border-gray-500 shadow-lg hover:bg-red-400 text-red-500 font-semibold py-2 
    px-4 rounded w-full inline-flex justify-center items-center  text-2xl"
    >
      {deleteIcon}
      <span>Delete</span>
    </button>
  );
};

export default DeleteButton;

const deleteIcon = (
  <svg
    className="w-8 h-8"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

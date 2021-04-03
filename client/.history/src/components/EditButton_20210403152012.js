import Link from "next/Link";

const EditButton = ({ id }) => {
  return (
    <Link href="">
      <a
        class="bg-red-300 shadow-lg hover:bg-red-400 text-red-500 font-semibold py-2 
    px-4 rounded w-full inline-flex justify-center items-center  text-2xl"
      >
        {deleteIcon}
        <span>Delete</span>
      </a>
    </Link>
  );
};

export default EditButton;

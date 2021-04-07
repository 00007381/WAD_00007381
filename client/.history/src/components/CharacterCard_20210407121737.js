import Link from "next/link";

const CharacterCard = (props) => {
  return (
    <Link href={`/shows/${show.id}`}>
      <a className="hover:bg-purple-500 rounded-lg text-blue-500 hover:text-white">
        <div className="relative pb-16/9">
          <img
            className=" absolute h-full w-full object-cover"
            src={show.photoURL}
          />
        </div>

        <div>
          <h3 className="text-blueGray-900  font-semibold text-center">
            {show.title}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default CharacterCard;

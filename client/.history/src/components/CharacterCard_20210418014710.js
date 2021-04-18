import Link from "next/link";

const CharacterCard = ({ character }) => {
  return (
    <Link href={`/character/${character.nickname}`}>
      <a className="hover:bg-purple-500 rounded-lg text-blue-500 hover:text-white">
        <div className="relative pb-16/9">
          <img
            className=" absolute h-full w-full object-cover"
            src={character.photoURL}
          />
        </div>

        <div>
          <h3 className="text-blueGray-900  font-semibold text-center">
            {character.nickname}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default CharacterCard;

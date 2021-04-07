import { data } from "autoprefixer";
import Link from "next/link";

const ShowCard = ({ show }) => {
  return (
    <Link href={`/shows/${show.id}`}>
      <a className="hover:bg-purple-500 p-2">
        <div className="relative pb-16/9">
          <img
            className=" absolute h-full w-full object-cover"
            src={show.photoURL}
          />
        </div>

        <div>
          <h3 className="text-blueGray-900 text-blue-500 font-semibold text-center">
            {show.title}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default ShowCard;

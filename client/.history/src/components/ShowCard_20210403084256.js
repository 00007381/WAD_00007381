import Link from "next/link";

const ShowCard = (props) => {
  return (
    <Link href="/">
      <a>
        <div className="relative pb-16/9">
          <img
            className=" absolute h-full w-full object-cover"
            src={props.show.photoURL}
          />
        </div>

        <div>
          <h4 className="text-blueGray-900 truncate">{props.course.title}</h4>
        </div>
      </a>
    </Link>
  );
};

export default ShowCard;

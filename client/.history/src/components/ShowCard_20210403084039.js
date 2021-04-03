import Link from "next/link";

const ShowCard = () => {
  return (
    <Link href="/">
      <a>
        <div className="relative pb-16/9">
          <img
            className=" absolute h-full w-full object-cover transform duration-500 group-hover:scale-105"
            src={props.course.photoURL ? props.course.photoURL : "/vercel.svg"}
          />
        </div>

        <div>
          <h4 className="leading-tight font-medium text-blueGray-900 truncate">
            {props.course.title}
          </h4>

          <div className="flex space-x-4 text-gray-500 mt-1">
            <div className="flex items-center space-x-2  font-semibold text-sm">
              {calendarIcon}
              <span>{timeSince(props.course.createdAt.seconds * 1000)}</span>
            </div>
            <p className="text-sm font-semibold truncate">
              {props.course.ownerDetails.username}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ShowCard;

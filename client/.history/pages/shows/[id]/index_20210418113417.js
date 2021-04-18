import { useRouter } from "next/router";
import axios from "axios";
import useSWR, { mutate } from "swr";
import Layout from "../../../src/Layout";
import dateFormat from "dateformat";
import DeleteButton from "../../../src/components/DeleteButton";
import EditButton from "../../../src/components/EditButton";
import { createRef, useRef, useState } from "react";
import ShowCard from "../../../src/components/ShowCard";
import CharacterCard from "../../../src/components/CharacterCard";
import Link from "next/Link";
import ColumnBar from "../../../src/components/ColumnBar";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ShowPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [deleting, setDeleting] = useState(false);

  const { data, error } = useSWR(
    `http://localhost:14602/api/Shows/${id}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  if (deleting) return <div>Deleting the show, please wait...</div>;
  //console.log(data.characters.$values);

  const onDelete = () => {
    setDeleting(true);
    axios
      .delete(`http://localhost:14602/api/Shows/${id}`)
      .then(function (response) {
        setDeleting(false);
        mutate("http://localhost:14602/api/Shows");
        router.push(`/`);
      })
      .catch(function (error) {
        setDeleting(false);
        console.log(error);
        // setErrorState(
        //   "Smth went wrong in the server side please look at the console"
        // );
      });
  };

  return (
    <div
      className=" bg-cover bg-center bg-blue-100"
      style={data.bgPhotoURL && { backgroundImage: `url(${data.bgPhotoURL})` }}
    >
      <Layout>
        <PictureAndMainInfo data={data} />
        <DescriptionContainer data={data} />
        <div className="my-6 grid grid-cols-2 gap-10">
          <DeleteButton onDelete={onDelete} text={"Delete this show"} />
          <EditButton id={id} text={"Edit this show"} />
        </div>
        <LisOfCharacters characters={data.characters.$values} showId={id} />
      </Layout>
    </div>
  );
};

export default ShowPage;

const LisOfCharacters = ({ characters, showId }) => {
  return (
    <div className="bg-white shadow-xl p-4 mb-6 rounded-lg">
      <div className="flex justify-between text-xl ">
        <h1 className="mb-4 font-semibold  text-2xl text-gray-800">
          List of Characters (one-to-many):
        </h1>
        <Link href={`/shows/${showId}/character/create`}>
          <a className="text-blue-600 hover:text-blue-300 p-1 rounded-lg">
            + Add new Character to this show
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10  justify-items-auto gap-6 ">
        {characters &&
          characters.map((item) => {
            return <CharacterCard character={item} key={item.index} />;
          })}
      </div>
    </div>
  );
};

const PictureAndMainInfo = ({ data }) => {
  return (
    <div className="grid grid-cols-3 mt-8 gap-10">
      <div className="relative pb-16/9 shadow-lg">
        <img
          className=" absolute h-full w-full object-cover rounded-lg"
          src={data.photoURL}
        />
      </div>
      <div className="col-span-2 bg-white p-2 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 border-b-2 mb-2">
          Show main details
        </h1>
        <ColumnBar placehodler={"title"} info={data.title} />
        <ColumnBar
          placehodler={"first episode date"}
          info={dateFormat(data.releasedDate, "longDate")}
        />
        <ColumnBar placehodler={"Creators"} info={data.createdBy} />
        {data.rating && <ColumnBar placehodler={"Rating"} info={data.rating} />}
        {data.numOfEpisodes !== 0 && (
          <ColumnBar
            placehodler={"Number of episodes"}
            info={data.numOfEpisodes}
          />
        )}
      </div>
    </div>
  );
};

const DescriptionContainer = ({ data }) => {
  return (
    <div className="mt-10 bg-white p-4 shadow-lg rounded-lg mb-4">
      <h1 className="text-2xl font-semibold text-gray-800 border-b-2 mb-2">
        Description
      </h1>
      <p className="text-lg">{data.description}</p>
    </div>
  );
};

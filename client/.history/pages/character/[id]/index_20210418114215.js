import { useRouter } from "next/router";
import axios from "axios";
import useSWR, { mutate } from "swr";
import Layout from "../../../src/Layout";
import dateFormat from "dateformat";
import DeleteButton from "../../../src/components/DeleteButton";
import EditButton from "../../../src/components/EditButton";
import { createRef, useRef, useState } from "react";
import ShowCard from "../../../src/components/ShowCard";
import Link from "next/Link";
import ColumnBar from "../../../src/components/ColumnBar";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const CharacterDetailPage = () => {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const { id } = router.query;

  const { data, error } = useSWR(
    `http://localhost:14602/api/Characters/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  //console.log(data);

  if (deleting) return <div>Deleting the character, please wait...</div>;

  const onDelete = () => {
    setDeleting(true);
    axios
      .delete(`http://localhost:14602/api/Characters/${id}`)
      .then(function (response) {
        mutate(`http://localhost:14602/api/Shows/${data.showId}`);
        setDeleting(false);
        router.push(`/`);
      })
      .catch(function (error) {
        setDeleting(false);
        console.log(error);
        alert("something went wrong please look at console for more details");
      });
  };

  return (
    <div className=" bg-cover bg-center bg-blue-100">
      <Layout>
        <PictureAndMainInfo data={data} />
        <BiographyContainer data={data} />
        <div className="my-6 grid grid-cols-2 gap-10">
          <DeleteButton onDelete={onDelete} text={"Delete this character"} />
          <EditButton id={id} text={"Edit this chracter"} isCharacter={true} />
        </div>
      </Layout>
    </div>
  );
};

export default CharacterDetailPage;

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
          Character`s main details
        </h1>
        <ColumnBar placehodler={"Nickname"} info={data.nickname} />
        <ColumnBar placehodler={"Appearance"} info={data.appearance} />
        {data.catchphrase && (
          <ColumnBar placehodler={"Catchphrase"} info={data.catchphrase} />
        )}
        {data.age && <ColumnBar placehodler={"Age"} info={data.age} />}
      </div>
    </div>
  );
};

const BiographyContainer = ({ data }) => {
  return (
    <div className="mt-10 bg-white p-4 shadow-lg rounded-lg mb-4">
      <h1 className="text-2xl font-semibold text-gray-800 border-b-2 mb-2">
        Biography
      </h1>
      <p className="text-lg">{data.bio}</p>
    </div>
  );
};

import { useRouter } from "next/router";
import axios from "axios";
import useSWR, { mutate } from "swr";
import Layout from "../../src/Layout";
import dateFormat from "dateformat";
import DeleteButton from "../../src/components/DeleteButton";
import EditButton from "../../src/components/EditButton";
import { createRef, useRef, useState } from "react";

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
        <DeleteButton onDelete={onDelete} />
        <EditButton />
      </Layout>
    </div>
  );
};

export default ShowPage;

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
          Main details
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

const ColumnBar = ({ placehodler, info }) => {
  return (
    <div className="flex space-x-4 text-gray-600">
      <h2 className="text-lg">{placehodler}:</h2>
      <h2 className="font-medium text-xl">{info}</h2>
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

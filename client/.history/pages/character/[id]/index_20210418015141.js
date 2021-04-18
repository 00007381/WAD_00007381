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

const CharacterDetailPage = () => {
  return (
    <div className=" bg-cover bg-center bg-blue-100">
      <Layout>
        <PictureAndMainInfo data={data} />
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
          Main details
        </h1>
        <ColumnBar placehodler={"Nickname"} info={data.nickname} />
        <ColumnBar placehodler={"Appearance"} info={data.appearance} />
        <ColumnBar placehodler={"Appearance"} info={data.appearance} />
        <ColumnBar placehodler={"Appearance"} info={data.appearance} />
        <ColumnBar placehodler={"Appearance"} info={data.appearance} />
        {data.catchphrase && (
          <ColumnBar placehodler={"Rating"} info={data.rating} />
        )}
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

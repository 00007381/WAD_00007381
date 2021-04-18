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
      <Layout>sd</Layout>
    </div>
  );
};

export default CharacterDetailPage;

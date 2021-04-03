import { useRouter } from "next/router";
import { createRef } from "react";
import axios from "axios";
import useSWR from "swr";
import Layout from "../../src/Layout";
import InputLabel from "../../src/components/InputLabel";

const CreatePage = () => {
  const titlreRef = createRef(); // titleRef.current.value
  return (
    <Layout>
      <h1 className="text-3xl mt-6 font-semibold text-gray-700">
        Form for adding a new Show
      </h1>
      <form className="my-4">
        <InputLabel name={"Title of the show"} ref={titlreRef} />
        <input type="submit" value="Submit" className="p-2" />
      </form>
    </Layout>
  );
};

export default CreatePage;

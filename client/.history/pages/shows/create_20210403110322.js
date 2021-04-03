import { useRouter } from "next/router";
import { createRef } from "react";
import axios from "axios";
import useSWR from "swr";
import Layout from "../../src/Layout";
import InputLabel from "../../src/components/InputLabel";

const CreatePage = () => {
  const titlreRef = createRef(); // titleRef.current.value

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titlreRef.current);
  };

  return (
    <Layout>
      <h1 className="text-3xl mt-6 font-semibold text-gray-700">
        Form for adding a new Show
      </h1>
      <form onSubmit={handleSubmit} className="my-4 space-y-4">
        <InputLabel
          name={"Title of the show"}
          ref={titlreRef}
          isRequired={true}
        />
        <input
          type="submit"
          value="Submit"
          className="py-2 px-4 text-xl bg-blue-500 text-white rounded-lg float-right"
        />
      </form>
    </Layout>
  );
};

export default CreatePage;

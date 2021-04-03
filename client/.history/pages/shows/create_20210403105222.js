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
      <form className="my-8">
        <InputLabel name={"Title of the show"} ref={titlreRef} />
      </form>
    </Layout>
  );
};

export default CreatePage;

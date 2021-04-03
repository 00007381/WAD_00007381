import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Layout from "../../src/Layout";
import InputLabel from "../../src/components/InputLabel";

const CreatePage = () => {
  return (
    <Layout>
      <form>
        <InputLabel name={"title"} />
      </form>
    </Layout>
  );
};

export default CreatePage;

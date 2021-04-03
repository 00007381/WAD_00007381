import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Layout from "../../src/Layout";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ShowPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `http://localhost:14602/api/Shows/${id}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <PictureAndMainInfo ={data}/>
    </Layout>
  );
};

export default ShowPage;

const PictureAndMainInfo = () => {
  return (
    <div className="grid grid-cols-3 mt-8 gap-10">
      <div className="relative pb-16/9">
        <img
          className=" absolute h-full w-full object-cover"
          src={data.photoURL}
        />
      </div>
      <div className="col-span-2">
        <h1 className="text-xl">title: {data.title}</h1>
      </div>
    </div>
  );
};

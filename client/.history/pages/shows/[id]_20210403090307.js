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
      <div className="flex">
        <div className="relative pb-16/9 overflow-hidden">
          <img
            className=" absolute h-full w-full object-cover rounded-md transform duration-500 group-hover:scale-105"
            src={props.course.photoURL ? props.course.photoURL : "/vercel.svg"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ShowPage;

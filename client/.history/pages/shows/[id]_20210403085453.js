import { useRouter } from "next/router";

const ShowPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div></div>;
};

export default ShowPage;

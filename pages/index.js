import Head from "next/head";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfo, setPosts } from "../redux/actions/main";
import { wrapper } from "../redux/store";

function Home(props) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const nameInfo = useSelector((state) => state.main.name);
  const postInfo = useSelector((state) => state.main.posts);

  return (
    <div>
      <Head>
        <title>My Web</title>
        <meta name="description" content="my weeeeeb" />
      </Head>
      <div>name is : {nameInfo}</div>
      <div>{postInfo.title}</div>

      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={() => dispatch(setInfo(name))}>Set Name</button>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(setPosts(req));
      store.dispatch(setInfo("serveer"));
    }
);

export default Home;

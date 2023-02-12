import fetch from "isomorphic-unfetch";

const name = ({ user }) => {
  const username = user && user.name;
  return <div>{username}</div>;
};

export const getServerSideProps = async ({ query }) => {
  console.log("query   :  " + query);
  const { name } = query;
  try {
    const res = await fetch(`http://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      console.log(" success"); //터미널에서 출력
      return { props: { user } };
    }
    return { pros: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default name;

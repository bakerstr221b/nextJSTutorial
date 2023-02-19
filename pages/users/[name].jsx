import fetch from "isomorphic-unfetch";

const name = ({ user }) => {
  console.log("user    :  " + JSON.stringify(user));
  const username = user && user.name;
  return <div>{username}</div>;
};

export const getServerSideProps = async ({ query }) => {
  console.log("query   :  " + JSON.stringify(query));
  const { name } = query;
  try {
    const res = await fetch(`http://api.github.com/users/${name}`);
    console.log("res.status  :  " + res.status);
    if (res.status === 200) {
      const user = await res.json();
      console.log(" success"); //터미널에서 출력
      return { props: { user } };
    } else if (res.status === 404) {
      return { props: { user: { name: "없음" } } };
    } else {
      return { props: {} };
    }
  } catch (e) {
    console.log("ee   :   " + e);
    return { props: {} };
  }
};

export default name;

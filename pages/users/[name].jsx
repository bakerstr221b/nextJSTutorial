import fetch from "isomorphic-unfetch";

const name = ({ user }) => {
  console.log("user    :  " + JSON.stringify(user));
  const username = user && user.name;
  return <div>{username}</div>;
};

name.getInitialProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`http://api.github.com/users/${name}`);
    console.log("res.status  :  " + res.status);
    if (res.status === 200) {
      const user = await res.json();
      return { user };
    }
    return { props: {} };
  } catch (e) {
    console.log("ee   :   " + e);
    return {};
  }
};

export default name;

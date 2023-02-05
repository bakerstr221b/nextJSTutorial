import fetch from "isomorphic-unfetch";

const index = ({ user }) => {
  console.log("user:  " + user);
  console.log("user.name   : " + user.name);
  console.log(user && user.name);
  const username = user && user.name;
  console.log("username  : " + username);
  return <div>{username}</div>;
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://api.github.com/users/jerrynim");
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

export default index;

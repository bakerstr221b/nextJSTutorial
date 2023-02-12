import React, { useState } from "react";
import Link from "next/link";

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`users/${username}`} legacyBehavior>
        <a>검색하기</a>
      </Link>
    </div>
  );
};

export default App;

// import fetch from "isomorphic-unfetch";

// const index = ({ user }) => {
//   console.log("user:  " + user);
//   console.log("user.name   : " + user.name);
//   console.log(user && user.name);
//   const username = user && user.name;
//   console.log("username  : " + username);
//   return <div>{username}</div>;
// };

// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch("http://api.github.com/users/jerrynim");
//     if (res.status === 200) {
//       const user = await res.json();
//       console.log(" success"); //터미널에서 출력
//       return { props: { user } };
//     }
//     return { pros: {} };
//   } catch (e) {
//     console.log(e);
//     return { props: {} };
//   }
// };

// export default index;

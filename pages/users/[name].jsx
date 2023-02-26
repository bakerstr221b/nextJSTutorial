import fetch from "isomorphic-unfetch";
import css from "styled-jsx/css";
import { GoOrganization, GoLink, GoMail, GoLocation } from "react-icons/go";

const style = css`
  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }
  .profile-imgae-wrapper {
    width: 100%;
    border: 1px solid #e1e4e8;
  }
  .profile-image-wrapper .profile-image {
    display: block;
    width: 100%;
  }
  .profile-username {
    margin: 0;
    padding-top: 16px;
    font-size: 26px;
  }
  .prifile-user-login {
    margin: 0;
    font-size: 20px;
  }
  .profile-user-bio {
    margin: 0;
    paddind-top: 16px;
    font-size: 14px;
  }
  .profile-user-info {
    display: flex;
    align-items: center;
    margin: 4px 0 0;
  }
  .profile-user-info-text {
    margin-left: 6px;
  }

  // h2 {
  //   margin-left: 20px;
  // }
  // .user-bio {
  //   margin-top: 12px;
  //   font-style: italic;
  //   p {
  //     font-size: 20px;
  //   }
  // }
`;
// const username = ({ user }) => {
//   return (
//     <>
//       {user ? (
//         <div>
//           <h2>{user.name}</h2>
//           <p className="user-bio">{user.bio}</p>
//         </div>
//       ) : (
//         <div>유저 정보가 없습니다</div>
//       )}
//       <style jsx>{style}</style>
//     </>
//   );
// };

// const name = ({ user }) => {
//   console.log("user    :  " + JSON.stringify(user));
//   const username = user && user.name;
//   return <div>{username}</div>;
// };
const name = ({ user }) => {
  console.log("user    :  " + JSON.stringify(user));
  if (!user) {
    return null;
  }
  return (
    <>
      <div className="profile-box">
        <div className="profile-image-wrapper">
          <img
            className="profile-image"
            src={user.avatar_url}
            alt={`${user.name} 프로필 이미지`}
          />
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <p className="profile-user-login">{user.login}</p>
        <p className="profile-user-bio">{user.bio}</p>
        <p className="profile-user-info">
          <GoLocation size={16} color="#6a737d" />
          <span className="profile-user-info-text">{user.location}</span>
        </p>
        <p className="profile-user-info">
          <GoMail size={16} color="#6a737d" />
          <span className="profile-user-info-text">{user.blog}</span>
        </p>
        <p className="profile-user-info">
          <GoLink size={16} color="#6a737d" />
          <span className="profile-user-info-text">{user.blog}</span>
        </p>
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default name;

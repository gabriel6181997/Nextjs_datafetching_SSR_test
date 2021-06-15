import { getAllUserIds, getUserData } from "src/util/getFunctions";
import styles from 'src/styles/Home.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';
import { UserInfoType } from "src/util/type";
import { FC } from "react";

// interface userDataProps {
//   userData: UserInfoType
// }

export const getStaticProps: GetStaticProps = async ({params}) => {
  // if(params?.id) {
    const {data} = await getUserData(params.id);
  // }
  return {
    props: {
      userData: data,
    },
  };
}

export  const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllUserIds();
  return {
    paths,
    fallback: 'blocking',
  }
}

// const UserInfo: FC<UserInfoType> = ({userData}): JSX.Element  => {
const UserInfo = ({userData})  => {

   return(
     <div className={styles.userInfo}>
       <h1>{userData.name}'s Personal Information</h1>
       <p>Email : {userData.email}</p>
       <p>Username : {userData.username}</p>
       <p>id : {userData.id}</p>
       <p>phone : {userData.phone}</p>
       <p>website : {userData.website}</p>
     </div>
   )
}

export default UserInfo;

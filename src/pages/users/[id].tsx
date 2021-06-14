import { getAllUserIds, getUserData } from "src/util/getFunctions";
import styles from 'src/styles/Home.module.css'

export async function getStaticProps({params}){
  const {data} = await getUserData(params.id);
  return {
    props: {
      userData: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllUserIds();
  return {
    paths,
    fallback: false,
  }
}

const UserInfo = ( {userData}) => {
  console.log(userData);

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

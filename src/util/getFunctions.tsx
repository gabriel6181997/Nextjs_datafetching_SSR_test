import { UserInfoType } from "./type";

export  const getAllUserIds = async () =>  {
   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
   const data : UserInfoType[] = await res.json();

   return data.map((user) => {
     return {
        params : {
          id: user.id.toString(),
        },
     };
   });
}

export const getUserData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    data,
  };
}

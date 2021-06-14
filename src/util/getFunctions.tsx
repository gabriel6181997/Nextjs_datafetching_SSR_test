export async function getAllUserIds() {
   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
   const data = await res.json();

   return data.map((user: any) => {
     return {
        params : {
          id: user.id.toString(),
        },
     };
   });
}

export async function getUserData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    data,
  };
}

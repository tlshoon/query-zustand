import React from "react";
import { useMutation } from "react-query";
import { instance } from "../../state/server/Base";

const postUser = async () => {
  const req = await instance.post("/api/users", {
    name: "morpheus",
    job: "leader",
  });
  return req.data
};

const User = () => {
    const postMutation = useMutation(postUser);
  return (
    <>    <button onClick={() => postMutation.mutate()}>Post User</button>
    {postMutation.isLoading && <div>Loading...</div>}
    {postMutation.isSuccess && <div>{postMutation.data.createdAt}</div>}
    </>

  );
};

export default User;
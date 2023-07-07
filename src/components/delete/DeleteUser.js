import React from "react";
import { instance } from "../../state/server/Base";
import { useMutation } from "react-query";

const userDelete = async () => {
  const req = await instance.delete("/api/users/2");
  return req.data;
};

const DeleteUser = () => {
  const deleteMutation = useMutation(userDelete, {
    onSuccess: () => {
      console.log("삭제 성공");
    },
    onError: (error) => {
      console.log("삭제 에러", error.message);
    },
  });
  return (
    <>
      <button onClick={() => deleteMutation.mutate()}>유저 삭제</button>
      {deleteMutation.isError && (
        <div>Error: {deleteMutation.error.message}</div>
      )}
      {deleteMutation.isSuccess && <div>삭제 성공</div>}
    </>
  );
};

export default DeleteUser;

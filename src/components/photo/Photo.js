import React from "react";
import { useQuery } from "react-query";
import { instance } from "../../state/server/Base";

const fetchPhoto = async () => {
  const res = await instance.get("/api/users?delay=3");
  return res.data.data;
};

const Photo = () => {
  const { data, isLoading, isError } = useQuery("photo", fetchPhoto);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        {data &&
          data.map((data) => (
            <div
              key={data.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <img
                src={data.avatar}
                alt={data.first_name}
                style={{ width: "40px", height: "40px" }}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Photo;

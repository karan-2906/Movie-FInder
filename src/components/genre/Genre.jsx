import React from "react";
import Topbar from "../topbar/Topbar";
import Movies from "../movies/Movies";
import { useGetGenresQuery } from "../../services/Api";

const Genre = () => {
  const { data } = useGetGenresQuery();

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="h-[100px] w-full">
        <Topbar />
      </div>
      <div className="w-full">
        <Movies movie={data} />
      </div>
    </div>
  );
};

export default Genre;
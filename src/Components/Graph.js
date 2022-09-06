import React from "react";
import Daughnut from "./charts/Daughnut";

export default function Graph() {
  return (
    <>
      <div className="card rounded-4 shadow-sm border-0">
        <div className="card-body">
          <p className="card-title fs-2">Overview</p>
          <Daughnut />
        </div>
      </div>
    </>
  );
}

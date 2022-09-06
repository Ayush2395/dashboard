import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ItemsCard({ text, value, icons, color }) {
  return (
    <>
      <div className="card rounded-4 shadow border-0">
        <div className="card-body">
          <div className="row">
            <div className="col-8 col-sm-8 col-md-8 col-lg-8">
              <p className="text-secondary text-capitalize">{text}</p>
              <p className="text-gray fs-5 fw-bold">{value}</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xs-6 justify-self-center align-self-center">
              <div
                className={`d-flex justify-content-center align-items-center bg-${color} bg-gradient text-white rounded-circle`}
                style={{ height: "50px", width: "50px" }}
              >
                <FontAwesomeIcon icon={`fa-solid fa-${icons}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

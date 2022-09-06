import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function OrderCards({ colors, username,orderno }) {
  return (
    <>
      <div
        className={`card rounded-4 mt-3 border border-5 border-top-0 border-end-0 border-bottom-0 border-${colors}`}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <p className="text-dark">{username}</p>
              <div className="d-flex justify-content-between align-items-center" style={{width:'55%'}}>
                <div
                  className="rounded-3 bg-light bg-gradient d-flex justify-content-center align-items-center"
                  style={{ height: "35px", width: "35px" }}
                >
                  <FontAwesomeIcon icon={`fa-solid fa-shirt`} />
                </div>
                <div
                  className="rounded-3 bg-light bg-gradient d-flex justify-content-center align-items-center"
                  style={{ height: "35px", width: "35px" }}
                >
                  <FontAwesomeIcon icon={`fa-solid fa-shirt`} />
                </div>
              </div>
            </div>
            <div className="col-4">
              <p className="text-dark fw-normal" style={{fontSize:'12px'}}>ORD-{orderno}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

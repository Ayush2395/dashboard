import React from "react";
import OrderCards from "./OrderCards";

export default function Summary() {
  return (
    <>
      <div className="card rounded-4 border-0 shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <p className="text-dark fw-bold fs-4">Today's Delivery</p>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="form-group mb-3">
                <input
                  type="search"
                  className="form-control border border-1"
                  placeholder="Search here"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <select className="form-select ms-auto border border-1" name="select" id="select">
                <option value="All orders">All Orders</option>
                <option value="All orders">Previous Orders</option>
              </select>
            </div>
            <div className="col-lg-4">
              <OrderCards
                colors="warning"
                username="789456123"
                orderno="0948"
              />
            </div>
            <div className="col-lg-4">
              <OrderCards colors="danger" username="Arif" orderno="0949" />
            </div>
            <div className="col-lg-4">
              <OrderCards colors="secondary" username="shiyas" orderno="0950" />
            </div>
            <div className="col-lg-4">
              <OrderCards
                colors="secondary"
                username="Walk in Customer"
                orderno="0951"
              />
            </div>
            <div className="col-lg-4">
              <OrderCards
                colors="primary"
                username="Customer 2"
                orderno="0952"
              />
            </div>
            <div className="col-lg-4">
              <OrderCards
                colors="primary"
                username="Walk in Customer"
                orderno="0953"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppState } from "../../context/ContextApi";

export default function Sidebar() {
  const { sidebar } = useAppState();
  return (
    <>
      <div
        className={`navbar sidebar ${sidebar} d-flex flex-nowrap flex-column flex-shrink-0 bg-white position-fixed my-3 mx-2 p-2 rounded-3 shadow`}
        style={{ zIndex: "1", height: "95vh", width: "280px" }}
      >
        <a
          href="/"
          className="d-block text-decoration-none fs-4 ms-3 me-auto mb-4 text-dark"
        >
          <FontAwesomeIcon icon="fa-solid fa-image" />{" "}
          <span className="text-dark">LAUNDRY</span>
        </a>
        <ul className="nav flex-column nav-flush nav-pills w-100 me-auto justify-content-around h-100">
          <li className="nav-item">
            <a href="/" className="nav-link  active">
              <FontAwesomeIcon icon="fa-solid fa-store" />{" "}
              <span className="text-gray">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-danger">
              <FontAwesomeIcon icon="fa-solid fa-tag" />{" "}
              <span className="text-gray">Pos</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-success">
              <FontAwesomeIcon icon="fa-solid fa-basket-shopping" />{" "}
              <span className="text-gray">Orders</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-warning">
              <FontAwesomeIcon icon="fa-solid fa-list" />{" "}
              <span className="text-gray">Order Status Screen</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-danger">
              <FontAwesomeIcon icon="fa-solid fa-newspaper" />{" "}
              <span className="text-gray">Expense</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-pink-20">
              <FontAwesomeIcon icon="fa-solid fa-user" />{" "}
              <span className="text-gray">Customers</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-primary">
              <FontAwesomeIcon icon="fa-solid fa-tag" />{" "}
              <span className="text-gray">Services</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-warning">
              <FontAwesomeIcon icon="fa-solid fa-chart-simple" />{" "}
              <span className="text-gray">Reports</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-orange">
              <FontAwesomeIcon icon="fa-solid fa-gear" />{" "}
              <span className="text-gray">Tools</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-gray">
              <FontAwesomeIcon icon="fa-solid fa-power-off" />{" "}
              <span className="text-gray">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useEffect } from "react";
import { useAppState } from "../../context/ContextApi";

export default function Navmenu() {
  const { sidebar, setSidebar } = useAppState();
  const handleHeader = () => {
    const header = document.getElementById("header");
    const scrollY = window.pageYOffset;
    scrollY >= 80
      ? header.classList.add("header")
      : header.classList.remove("header");
  };

  useEffect(() => {
    handleHeader();
  }, []);
  return (
    <>
      <div
        className="bg-primary w-100 position-fixed d-flex justify-content-center"
        style={{ zIndex: "1" }}
        id="header"
      >
        <div className="w-75 py-2 bg-primary d-flex justify-content-between align-items-center ">
          <div className="mx-5">
            <div
              className="burger"
              onClick={() => {
                sidebar === "sidebar"
                  ? setSidebar("sidebar-close")
                  : setSidebar("sidebar");
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="toggler bar-1"></div>
              <div className="toggler bar-2"></div>
              <div className="toggler bar-3"></div>
            </div>
          </div>
          <div className="mx-1 text-white w-25 ms-auto">
            <div className="d-flex justify-content-evenly align-items-center w-50">
              <FontAwesomeIcon
                icon="fa-solid fa-circle-plus"
                className="mx-1"
              />
              <FontAwesomeIcon icon="fa-solid fa-tag" className="mx-1" />
              <FontAwesomeIcon icon="fa-solid fa-user" className="mx-1" />
              <DropdownButton
                variant="white"
                className="text-primary mx-1"
                size="sm"
                title="English"
              >
                <Dropdown.Item>Hindi</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

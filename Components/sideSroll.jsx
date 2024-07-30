import React from "react";

export default function scoller() {
  return (
    <div className="row">
      <div className="col-4">
        <nav
          id="navbar-example3"
          className="h-200 flex-column align-items-stretch pe-4 "
        >
          <nav className="nav nav-pills flex-column">
            <a className=" items nav-link" href="#item-1">
            Lifestyle
            </a>
            <nav className="nav nav-pills flex-column">
              <a className=" items nav-link ms-0 my-2 " href="#item-1-1">
              Jordan
              </a>
              <a className=" items nav-link ms-0 my-2 " href="#item-1-2">
              Running
              </a>
            </nav>
            <a className=" items nav-link" href="#item-2">
            Basketball
            </a>
            <a className=" items nav-link my-2  " href="#item-3">
            American Football
            </a>
            <nav className="nav nav-pills flex-column">
              <a className=" items nav-link ms-0 my-2 " href="#item-3-1">
              Football
              </a>
              <a className=" items nav-link ms-0 my-2 " href="#item-3-2">
              Training & Gym
              </a>
            </nav>
          </nav>
        </nav>
      </div>

      <div className="col-0">
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-smooth-scroll="true"
          className="scrollspy-example-2"
          
        ></div>
      </div>
    </div>
  );
}

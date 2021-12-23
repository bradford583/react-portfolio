import React from "react";

function Navbar(props) {
  const tabs = ["About", "Work", "Contact", "Resume"];
  return (
    <header className="navbar">
      <nav className="navigation">
        <h1 className="nametag">Chris Bradford</h1>
        <ul className="flex-row navLayout">
          {tabs.map((tab) => (
            <li className="mx-2" key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? "nav-linkActive" : "nav-link"
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

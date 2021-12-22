import React from "react";



function Navbar(props) {
  const tabs = ['About', 'Work', 'Contact', 'Resume']
  return (
    <header className="navbar">
      <nav>
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

      <div id="titleName">
        <h1>Chris Bradford</h1>
      </div>
    </header>
  );
}

export default Navbar;

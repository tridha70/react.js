import { NavLink, Outlet } from "react-router-dom";

function ServicesLayout() {
  return (
    <div>
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Explore the services we provide</p>
      </div>

      <div className="sub-nav">
        <NavLink
          to="web-development"
          className={({ isActive }) =>
            isActive ? "sub-link active-sub" : "sub-link"
          }
        >
          Web Development
        </NavLink>

        <NavLink
          to="app-development"
          className={({ isActive }) =>
            isActive ? "sub-link active-sub" : "sub-link"
          }
        >
          App Development
        </NavLink>

        <NavLink
          to="ui-ux-design"
          className={({ isActive }) =>
            isActive ? "sub-link active-sub" : "sub-link"
          }
        >
          UI/UX Design
        </NavLink>
      </div>

      {/* Nested pages will display here */}
      <Outlet />
    </div>
  );
}

export default ServicesLayout;

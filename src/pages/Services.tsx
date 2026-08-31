import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 18 }}>
      <aside>
        <div className="panel">
          <header className="panel-header">
            <h3>Services</h3>
          </header>
          <nav style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <NavLink to="web" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Web Development
            </NavLink>
            <NavLink to="app" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              App Development
            </NavLink>
            <NavLink to="ui" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              UI/UX Design
            </NavLink>
          </nav>
        </div>
      </aside>

      <section>
        <Outlet />
      </section>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

const sample = [
  { id: '1', name: 'Nimbus UI Kit', price: '$29' },
  { id: '2', name: 'Photon Analytics', price: '$59' },
  { id: '3', name: 'Atlas CMS', price: '$99' },
]

export default function ProductList() {
  return (
    <div className="panel">
      <header className="panel-header">
        <h2>Product List</h2>
      </header>

      <ul style={{ marginTop: 12, display: 'grid', gap: 8 }}>
        {sample.map((p) => (
          <li key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>{p.name}</strong>
              <div style={{ fontSize: 13, color: '#64748b' }}>{p.price}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link to={`${p.id}`} className="nav-link">
                Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

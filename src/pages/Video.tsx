import React from 'react'

export default function Video() {
  return (
    <section className="panel">
      <header className="panel-header">
        <h1>Screen Recording</h1>
      </header>

      <div className="video-container" style={{ marginTop: 12 }}>
        <video
          controls
          style={{ width: '100%', borderRadius: 12, background: '#000' }}
        >
          <source src="/screen-recording.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p style={{ marginTop: 12, color: '#64748b' }}>
          Place your MP4 file at <strong>/public/screen-recording.mp4</strong> to play it here.
        </p>
      </div>
    </section>
  )
}

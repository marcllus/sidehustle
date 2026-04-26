"use client"

export function BackgroundEffects() {
  return (
    <>
      {/* Grid */}
      <div className="bg-grid" />

      {/* Orbs */}
      <div
        className="bg-orb"
        style={{
          width: "900px",
          height: "700px",
          background: "rgba(59,130,246,0.055)",
          top: "-300px",
          left: "-300px",
        }}
      />
      <div
        className="bg-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "rgba(139,92,246,0.04)",
          bottom: "-100px",
          right: "-150px",
        }}
      />
      <div
        className="bg-orb"
        style={{
          width: "350px",
          height: "350px",
          background: "rgba(6,214,160,0.035)",
          top: "50%",
          left: "55%",
        }}
      />
    </>
  )
}

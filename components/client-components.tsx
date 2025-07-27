"use client"

import { MeshGradientComponent } from "./mesh-gradient"
import { ContextMenu } from "./context-menu"

export function ClientComponents() {
  const randomizeColors = () => {
    if (typeof window !== "undefined" && window.randomizeGradientColors) {
      window.randomizeGradientColors()
    }
  }

  return (
    <>
      <MeshGradientComponent
        colors={["#001c80", "#1ac7ff", "#04ffb1", "#ff1ff1"]}
        speed={2.5}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <ContextMenu onRandomizeColors={randomizeColors} />
    </>
  )
}
"use client"

import { MeshGradient, type MeshGradientProps } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"

interface MeshGradientComponentProps extends Omit<MeshGradientProps, "colors"> {
  colors?: string[]
  speed?: number
  onColorsChange?: (colors: string[]) => void
}

export function MeshGradientComponent({
  speed,
  colors: initialColors = ["#001c80", "#1ac7ff", "#04ffb1", "#ff1ff1"],
  onColorsChange,
  ...props
}: MeshGradientComponentProps) {
  const [colors, setColors] = useState(initialColors)

  useEffect(() => {
    document.body.classList.add("opacity-100")
  }, [])

  const randomizeColors = () => {
    const generateRandomColor = () => {
      const hue = Math.floor(Math.random() * 360)
      const saturation = Math.floor(Math.random() * 40) + 60 // 60-100%
      const lightness = Math.floor(Math.random() * 30) + 35 // 35-65%

      // Convert HSL to hex
      const hslToHex = (h: number, s: number, l: number) => {
        l /= 100
        const a = (s * Math.min(l, 1 - l)) / 100
        const f = (n: number) => {
          const k = (n + h / 30) % 12
          const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
          return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0")
        }
        return `#${f(0)}${f(8)}${f(4)}`
      }

      return hslToHex(hue, saturation, lightness)
    }

    const newColors = [generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor()]

    setColors(newColors)
    onColorsChange?.(newColors)
  }

  // Expose randomize function to parent
  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(window as any).randomizeGradientColors = randomizeColors
    }
  }, [])

  return <MeshGradient {...props} colors={colors} speed={speed ? speed / 10 : 0.25} />
}

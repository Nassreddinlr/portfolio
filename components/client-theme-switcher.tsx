"use client"

import dynamic from "next/dynamic"
import { ThemeSwitcher as OriginalThemeSwitcher } from "./switch-theme"

export function ClientThemeSwitcher() {
  return <OriginalThemeSwitcher />
}
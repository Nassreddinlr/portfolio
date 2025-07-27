"use client"
import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Monitor, Shuffle, Linkedin, Mail, Download, Palette } from "lucide-react"
import clsx from "clsx"

interface ContextMenuProps {
  onRandomizeColors: () => void
}

export function ContextMenu({ onRandomizeColors }: ContextMenuProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()

      // Calculate position to keep menu within viewport
      const menuWidth = 200
      const menuHeight = 280
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      let x = e.clientX
      let y = e.clientY

      // Adjust if menu would go off-screen
      if (x + menuWidth > viewportWidth) {
        x = viewportWidth - menuWidth - 10
      }
      if (y + menuHeight > viewportHeight) {
        y = viewportHeight - menuHeight - 10
      }

      setPosition({ x, y })
      setIsVisible(true)
    }

    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsVisible(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false)
      }
    }

    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("click", handleClick)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("click", handleClick)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Resume Nassreddine Larbi Aissa.pdf"
    link.download = "Nassreddine_Larbi_Aissa_Resume.pdf"
    link.click()
    setIsVisible(false)
  }

  const handleEmailContact = () => {
    window.location.href = "mailto:larbiaissanassreddine@gmail.com?subject=Let's work together"
    setIsVisible(false)
  }

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/in/nassreddine-larbi-aissa", "_blank")
    setIsVisible(false)
  }

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    setIsVisible(false)
  }

  const handleRandomize = () => {
    onRandomizeColors()
    setIsVisible(false)
  }

  if (!mounted || !isVisible) return null

  const menuItems = [
    {
      label: "Theme",
      icon: theme === "dark" ? Moon : theme === "light" ? Sun : Monitor,
      submenu: [
        { label: "Light", icon: Sun, action: () => handleThemeChange("light") },
        { label: "Dark", icon: Moon, action: () => handleThemeChange("dark") },
        { label: "System", icon: Monitor, action: () => handleThemeChange("system") },
      ],
    },
    {
      label: "Randomize Colors",
      icon: Shuffle,
      action: handleRandomize,
    },
    { type: "separator" },
    {
      label: "LinkedIn",
      icon: Linkedin,
      action: handleLinkedIn,
    },
    {
      label: "Contact Me",
      icon: Mail,
      action: handleEmailContact,
    },
    {
      label: "Download Resume",
      icon: Download,
      action: handleDownloadResume,
    },
  ]

  return (
    <div
      ref={menuRef}
      className={clsx(
        "fixed z-[9999] bg-slate-1 border border-slate-6 rounded-lg shadow-xl py-2 min-w-[200px]",
        "animate-in fade-in-0 zoom-in-95 duration-200",
      )}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {menuItems.map((item, index) => {
        if (item.type === "separator") {
          return <div key={index} className="h-px bg-slate-6 my-2 mx-2" />
        }

        if (item.submenu) {
          return (
            <div key={index} className="relative group">
              <div className="flex items-center gap-3 px-4 py-2 text-sm text-slate-12 hover:bg-slate-3 cursor-pointer">
                <item.icon className="w-4 h-4" />
                <span className="flex-1">{item.label}</span>
                <Palette className="w-3 h-3 opacity-50" />
              </div>

              {/* Submenu */}
              <div className="absolute left-full top-0 ml-1 bg-slate-1 border border-slate-6 rounded-lg shadow-xl py-2 min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {item.submenu.map((subItem, subIndex) => (
                  <button
                    key={subIndex}
                    onClick={subItem.action}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-slate-12 hover:bg-slate-3 w-full text-left"
                  >
                    <subItem.icon className="w-4 h-4" />
                    <span>{subItem.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )
        }

        return (
          <button
            key={index}
            onClick={item.action}
            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-12 hover:bg-slate-3 w-full text-left transition-colors duration-150"
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </button>
        )
      })}

      {/* Easter egg indicator */}
      <div className="px-4 py-2 border-t border-slate-6 mt-2">
        <p className="text-xs text-slate-10 text-center">🥚 Easter Egg Activated!</p>
      </div>
    </div>
  )
}

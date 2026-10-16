import React from "react"

// Placeholder shown until a student's profile picture is added
export default function InitialsAvatar({ name, size = 150, style }) {
  const initials = name
    .split(" ")
    .map(part => part[0])
    .join("")
  return (
    <div
      role="img"
      aria-label={name}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Lora", serif',
        fontSize: size * 0.35,
        fontWeight: 700,
        flexShrink: 0,
        ...style,
      }}
    >
      {initials}
    </div>
  )
}

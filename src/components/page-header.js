import React from "react"

const styles = {
  header: {
    padding: "1rem 0 1.5rem",
    marginBottom: "2rem",
    borderBottom: "1px solid #e3e7ef",
  },
  title: {
    fontSize: "clamp(1.9rem, 4vw, 2.5rem)",
    margin: "0 0 0.75rem",
    color: "#002868",
    fontWeight: "700",
    lineHeight: "1.2",
  },
  subtitle: {
    fontSize: "0.9rem",
    color: "#6a6a6a",
    margin: 0,
  },
  lead: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#4a4a4a",
    margin: "1rem 0 0",
  },
}

export default function PageHeader({ title, subtitle, children }) {
  return (
    <div style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
      {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
      {children && <p style={styles.lead}>{children}</p>}
    </div>
  )
}

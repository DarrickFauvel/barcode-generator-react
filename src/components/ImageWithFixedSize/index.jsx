import React, { useState } from "react"

function ImageWithFixedSize({ src, width, height }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
      }}>
      {/* Placeholder */}
      {!loaded && (
        <div
          style={{
            width: "100%",
            paddingTop: `${(height / width) * 100}%`, // Maintain aspect ratio
          }}
        />
      )}

      {/* Actual image */}
      <img
        src={src}
        alt="Placeholder"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0, // Hide until loaded
          transition: "opacity 0.3s ease-in-out",
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default ImageWithFixedSize

import React from 'react'

export function Image() {
    const styles = {
        logoimg: {
            position: "absolute",
            left: "955px",
            top: "200px",
            borderRadius : "8px", 
            width: "25%",
            height: "500px",
        },
      };
    return (
        <div style={styles.logoimg}>
            <img src="assets\images\logo.jpg" alt="Image loading"/>
        </div>
    )
}

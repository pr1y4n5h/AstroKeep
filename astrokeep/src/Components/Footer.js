import React from 'react'

export const Footer = () => {
    const currYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <p> Copyright © {currYear} </p>
        </footer>
    )
}

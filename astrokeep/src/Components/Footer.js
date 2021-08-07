import React from 'react'

export const Footer = () => {
    const currYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <p> Made with ❤ Copyright © {currYear} </p>
        </footer>
    )
}

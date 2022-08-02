import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear()
    return (
        <footer className="bg-dark   py-2">
            <div className='container'>
                <div className='row'>
                    <div className='col '>

                    <p className='mb-0 text-center text-white '>
                    &copy; {year} all right reserved.</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

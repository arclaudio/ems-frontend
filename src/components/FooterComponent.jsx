import React from 'react'

const FooterComponent = () => {
  return (
    <div className='fixed-bottom'>

        <footer className='bg-dark text-center text-white'>
            <div className='container p-4 pb-0'>
                <section className='mb-4'>
                <a className='btn btn-outline-light btn-floating m-1 rounded-circle' href='#!' role='button'>
                    <i className='bi bi-facebook'></i>
                </a>

                <a className='btn btn-outline-light btn-floating m-1 rounded-circle' href='#!' role='button'>
                    <i className='bi bi-twitter'></i>
                </a>

                <a className='btn btn-outline-light btn-floating m-1 rounded-circle' href='#!' role='button'>
                    <i className='bi bi-google'></i>
                </a>

                <a className='btn btn-outline-light btn-floating m-1 rounded-circle' href='#!' role='button'>
                    <i className='bi bi-instagram'></i>
                </a>

                <a className='btn btn-outline-light btn-floating m-1 rounded-circle' href='#!' role='button'>
                    <i className='bi bi-linkedin'></i>
                </a>

                <a className='btn btn-outline-light btn-floating m-1 rounded-circle' href='#!' role='button'>
                    <i className='bi bi-github'></i>
                </a>
                </section>
            </div>

            <div className='text-center p-3 footer-bg'>
                <span>© 2020 Copyright: </span>
                <a className='text-white' href='#'>AARON R. CLAUDIO</a>
            </div>
        </footer>
  
    </div>
  )
}

export default FooterComponent
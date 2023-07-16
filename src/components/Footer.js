import React from 'react'

const Footer = () => {
  return (
    <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright 2023 &copy; All Rights Reserved</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        
                        <a className="btn btn-dark btn-social mx-2" rel="noreferrer" href="https://www.linkedin.com/in/rutvik-kansagara-b3a887262" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-dark btn-social mx-2" rel="noreferrer" href="https://github.com/RutvikKansagara" target="_blank" aria-label="Github"><i className="fa-brands fa-github"></i></a>
                        <a className="btn btn-dark btn-social mx-2" rel="noreferrer" href="https://instagram.com/rutvikkansagara?igshid=ZDc4ODBmNjlmNQ==" target="_blank" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <span className="link-dark text-decoration-none me-3">Made By - Rutvik Kansagara</span>
                        {/* <a className="link-dark text-decoration-none" href="#!">Terms of Use</a> */}
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer

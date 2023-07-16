import React from 'react'

const Header = () => {
  return (
    <header className="masthead">
        <div className="container">
            <div className="masthead-subheading">Welcome To My Portfolio!</div>
            <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-primary btn-xl text-uppercase" href="/rutvik-resume.pdf" download>Download CV</a>

        </div>
    </header>
  )
}

export default Header

import React from 'react'

const Services = () => {
  return (
    <section className="page-section" id="services">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase mb-3">Skills</h2>
                {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <i className="fa-brands fa-html5"></i>
                    </span>
                    <h4 className="my-3">HTML</h4>
                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> */}
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <i className="fa-brands fa-css3-alt"></i>
                    </span>
                    <h4 className="my-3">CSS</h4>
                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> */}
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <i className="fa-brands fa-js"></i>
                    </span>
                    <h4 className="my-3">JavaScript</h4>
                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> */}
                </div>
            </div>
    </div>
    <div className="carousel-item">
      <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <i className="fas fa-database"></i>
                    </span>
                    <h4 className="my-3">SQL</h4>
                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> */}
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <i className="fa-brands fa-laravel"></i>
                    </span>
                    <h4 className="my-3">Laravel</h4>
                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> */}
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <i className="fa-brands fa-react"></i>
                    </span>
                    <h4 className="my-3">React.js</h4>
                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> */}
                </div>
            </div>
    </div>
    <div className="carousel-item">
      <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <i className="fa-brands fa-vuejs"></i>
                    </span>
                    <h4 className="my-3">Vue.js</h4>
                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> */}
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                    <i className="fa-brands fa-github"></i>
                    </span>
                    <h4 className="my-3">Github</h4>
                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> */}
                </div>
                {/* <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="my-3">Web Security</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div> */}
            </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  
  
</div>
        </div>
    </section>
  )
}

export default Services

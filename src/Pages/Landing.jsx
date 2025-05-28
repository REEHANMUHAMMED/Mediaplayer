import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
    
    <div className="container-fluid p-2">
      <div style={{ height: "80vh" }} className="w-100 row align-items-center">
        <div className="col">
          <h2 className="text-center">Media Player 2025</h2>
          <p style={{textAlign:"justify"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit et odio aspernatur. Saepe, non, iste molestiae
            temporibus ullam eveniet recusandae mollitia explicabo in,
            necessitatibus nobis illo labore esse tempora ipsum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, aliquam aliquid, tempora voluptas libero neque suscipit nobis nesciunt impedit perferendis necessitatibus consequatur explicabo atque ea inventore dolor cum nam eos?
          </p>
            <div className='d-grid'>
                <Link className='btn btn-success' to={'/log'}>Click for More...</Link>
            </div>
        </div>
        <div className="col">
          <img style={{width:"100%"}} src='https://t4.ftcdn.net/jpg/10/74/27/83/360_F_1074278308_gTHzGIskQ18OXE3u6oLXljfh4DM4XlAN.jpg' alt="media-player-image" />
        </div>
      </div>
    </div>

      <div className="w-100 d-flex justify-content-around my-5">

         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://reviewupsize.com/wp-content/uploads/2020/04/review-video.gif" height={'250px'} />
           <Card.Body>
             <Card.Title>Save youtube videos</Card.Title>
             <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
             </Card.Text>
            </Card.Body>
         </Card>

         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/23628588/file/original-1f54f44587d2851f4c5b49446b3e3572.gif" height={'250px'} />
           <Card.Body>
             <Card.Title>Play saved videos</Card.Title>
             <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
             </Card.Text>
            </Card.Body>
         </Card>

         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1400/1*f7cZomxEUsR2AYQVlUXZog.gif" height={'250px'} />
           <Card.Body>
             <Card.Title>Video History List</Card.Title>
             <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
             </Card.Text>
            </Card.Body>
         </Card>

      </div>

      <div className="container border shadow border-3">
        <div className="row">
          <div className="col-4">
            <img src="https://community-assets.home-assistant.io/original/4X/9/1/3/9132cda3ec5079f0ddfc6a4ce5be02e07c7cce11.png" alt="" className="w-100" />
          </div>
          <div className="col-8 p-3 d-flex flex-column justify-content-center">
            <h3>Simple,Fast and Secure</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id rerum voluptate sit ipsa cum quaerat, praesentium, dolore facilis quae beatae mollitia explicabo dolorum ad modi ducimus reprehenderit unde aliquam voluptatem?
            </p>
          </div>
        </div>
      </div>


      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h2>Watch your favourite video and save then!</h2>
            <p className="mt-4" style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id rerum voluptate sit ipsa cum quaerat, praesentium, dolore facilis quae beatae mollitia explicabo dolorum ad modi ducimus reprehenderit unde aliquam voluptatem</p>

          </div>
          <div className="col">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/nR1DmLKb8oE?si=FD-Gn3sGcztLlRHL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing

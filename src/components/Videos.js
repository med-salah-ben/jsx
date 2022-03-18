import React from 'react';
import YouTube from 'react-youtube';
import { otherVid } from './Data';
import { Form,Button,Card } from 'react-bootstrap';

import "./video.css"

const Videos = (props) => {
    const onReady =(event)=> {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const opts2 = {
        height: '150',
        width: '240',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    const {dataVid,name} = props
 console.log(dataVid,name)
  return (
      <div>
              <h1>Ws JSX</h1>
    <div style={{display:"flex"}}>
    
{  dataVid.map((el)=>(
      <div style={{backgroundColor:"yellow" , margin:"20px 50px",border:"3px solid  black"}} key={el.id} >
          <h3 style={{color:"GrayText"}} > {el.title} </h3>
          <YouTube videoId={el.vid} opts={opts} onReady={onReady} />
          <h5>Chaine youtube</h5>   
          <a href={el.url}>Chaine YouTube</a>
          <Form style={{margin:"30px 20px"}}>
              <h2>Contact:  {el.title} </h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

      </div>
  ))}
  <div>
  {otherVid.map((el)=>(
  <Card border="primary" key={el.id} style={{ width: '18rem', height:"250px",marginTop:"20px" }}>
  <Card.Header> title :  {el.title} </Card.Header>
  <Card.Body>
    <Card.Title><a href={el.url} >Link</a> </Card.Title>
    <Card.Text>
    <YouTube videoId={el.vid} opts={opts2} onReady={onReady} />
    </Card.Text>
  </Card.Body>
</Card>

))}
</div>
</div>



    </div>
  )
}

export default Videos
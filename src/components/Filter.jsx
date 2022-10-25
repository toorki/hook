import React from 'react'
import { Container, FormControl, Navbar } from 'react-bootstrap'
import ReactStars from 'react-stars'

const Filter = ({handleSearch, handleRate}) => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container className='cont'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://images-platform.99static.com//jQmoFlrBFrlC5UdF9rVvA0mLS3g=/600x600:1199x1199/fit-in/500x500/99designs-contests-attachments/113/113743/attachment_113743867"
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
          <ReactStars
  count={5}
  size={24}
  onChange={handleRate}
  color2={'#ffd700'} />
          <FormControl id='search' onChange={(e)=>handleSearch(e)} />
        </Container>
      </Navbar>
    </div>
  )
}

export default Filter
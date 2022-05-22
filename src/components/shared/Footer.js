import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'

const footer = () => {
  return (
    <div>
      <MDBFooter color='blue' className='font-small pt-4 mt-4'>
        <div className='footer-copyright text-center py-3'>
          <MDBContainer fluid>
            &copy; Copyright: {new Date().getFullYear()} , RIM ELECTRIC TOOLS
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  )
}

export default footer

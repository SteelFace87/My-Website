import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';



export default function Profile({ data }) {

  return (
    <div className='profile' style={{ color: 'white', display: 'flex', textAlign: 'center', paddingBottom: '30px',marginBottom: '30px', borderBottom: '1px solid white' }}>
      <Img fluid={data.faceShot.childImageSharp.fluid} />

      <div style={{ backgroundColor: '', alignSelf: 'center', justifyContent: 'center' }}>
        <p style={
          {
            margin: ' 0 0 0 30px',
            padding: '20px 0 0 0 ',
            textAlign: 'left',
            fontSize: '50px'
          }}>"</p>
        <p style={{ fontSize: '30px', margin: '30px' }}>
          Full Stack Software Developer with a
          passion for diving under the hood to get a
          deeper understanding on new technology.
          When I'm not helping my friends fix something
           they broke, you can find me enjoying the outdoors.
      </p>
        <p style={{
          textAlign: 'right',
          fontSize: '50px',
          marginRight: '30px',
          padding: '0 0 30px 0'
        }}>"</p>
      </div>
    </div>
  )
}

Profile.propTypes = {
  data: PropTypes.object.isRequired
}
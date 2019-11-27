import PropTypes from "prop-types"
import React from "react"

const FeatureBlock = ({ featureTitle, featureDescription, imageRight, image }) => (
  <div className="feature-block" style={{
      padding: '20px',
      margin: '80px 0'
    }}>
    {imageRight ? (
      <span/>
    ) : (
      <div className="feature-graphic" style={{
          width: '50%',
          display: 'inline-block',
          maxWidth: '800px'
        }}>
        { image }
      </div>
    )}
    <div className="feature-text" style={{
        width: '50%',
        display: 'inline-block',
        verticalAlign: 'top'
      }}>
      <p className="feature-title" style={{
          fontSize: '28px',
          marginBottom: '24px'
        }}>
        { featureTitle }
      </p>
      <p className="feature-description" style={{
          fontSize: '22px',
          lineHeight: '30px'
        }}>
        { featureDescription }
      </p>
    </div>
    {imageRight ? (
      <div className="feature-graphic" style={{
          width: '50%',
          display: 'inline-block',
          maxWidth: '800px'
        }}>
        { image }
      </div>
    ) : (
    <span/>
    )}
  </div>
)


FeatureBlock.propTypes = {
  featureTitle: PropTypes.string,
  featureDescription: PropTypes.string,
  imageRight: PropTypes.bool
}

FeatureBlock.defaultProps = {
  featureTitle: ``,
  featureDescription: ``,
  imageRight: false
}


export default FeatureBlock

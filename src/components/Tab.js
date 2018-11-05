import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { genericTypeAnnotation } from 'babel-types';

class Tab extends Component {

  static PropTypes = {
    name: PropTypes.string.isRequired,
    tabID: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired
  }

  render() {
    const {tabID, handleClicked, name, isSelected} = this.props;
    
    return (
          <div
            className='tab' 
            onClick={isSelected ? null  : (() => handleClicked(tabID))}
            style={{background: isSelected? 'gray' : 'none'}}>
            {name}
          </div>
    )
  }
}

export default Tab
import React, {Component} from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types'


class ContentBox extends Component {

  static PropTypes ={
    content: PropTypes.string.isRequired
  }

  render() {
    const {content} = this.props
    return(
      <div className='display-container'>
        <div className='display'>
          {content}
        </div>
      </div>
    )
  }
}

export default ContentBox;
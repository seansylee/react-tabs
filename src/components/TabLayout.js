import React, {Component} from 'react'
// import Tab from './Tab'
import Content from '../utils/Content'
import PropTypes from 'prop-types'

class TabLayout extends Component {
  state = {
    currentTab: this.props.selected,
  };

  render(){
    return (
      <div className='tab-layout-container'>
        {this.props.children}
      </div>
    )
  }
}

export const TabContainer = ({children}) => (
  <div className='tab-container'>
    {children}
  </div>
)

export const Tab = (props) => {
    const {tabID, name, isSelected, disabled} = props;
    return (
          <button
            className='tab' 
            onClick={() => console.log(tabID, "has been selected")}
            style={{background: isSelected? 'gray' : 'none'}}
            disabled={disabled}>
            {name}
          </button>
    );
}

export const ContentBox = ({ content }) => {
  return (
    <div className='display-container'>
      <div className='display'>
        {content}
      </div>
    </div>
  )
}
ContentBox.PropTypes ={
  content: PropTypes.string.isRequired
}

Tab.PropTypes = {
  name: PropTypes.string.isRequired,
  tabID: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default TabLayout;
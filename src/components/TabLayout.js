import React, {Component} from 'react'
import Content from '../utils/Content'
import PropTypes from 'prop-types'

class TabLayout extends Component {
  state = {
    selected: "1"
  };

  handleSelect = (tabID) => {
    console.log("Ive been triggered by: ", tabID);
    this.setState({
      selected: tabID
    });
  }

  render(){
    const {children} = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        handleSelect: this.handleSelect,
        selected: this.state.selected
      })
    );
    
    return (
      <div className='tab-layout-container'>
        {childrenWithProps}
      </div>
    )
  }
}

export class TabContainer extends Component {
  render(){
    const {handleSelect, children, selected} = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        handleSelect: handleSelect,
        selected: selected
      })
    );
    return (
      <div className='tab-container'>
        {childrenWithProps}
      </div>
    )
  }
}

export const TabContent = (props) => {
  const {tabID, selected, children} = props;
  const isSelected = (selected == tabID);
  return (
    <div 
      className='display-container'
      style={{display: isSelected? null : 'none'}}>
      <div className='display'>
        {children}
      </div>
    </div>
  );
}


export const Tab = (props) => {
  const {tabID, name, selected, disabled, handleSelect} = props;
  let isSelected = (selected == tabID);
  return (
        <button
          className='tab' 
          onClick={() => handleSelect(tabID)}
          style={{background: isSelected? 'gray' : 'none'}}
          disabled={disabled || isSelected}>
          {name}
        </button>
  );
}

Tab.PropTypes = {
  name: PropTypes.string.isRequired,
  tabID: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired
};

export default TabLayout;
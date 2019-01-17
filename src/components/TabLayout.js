import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TabLayout extends Component {
  state = {
    selected: this.props.selected || 0
  };

  handleSelect = (tabID) => {
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
    const childrenWithProps = React.Children.map(children, (child, index)=>
      React.cloneElement(child, {
        handleSelect: () => handleSelect(index),
        selected: selected,
        isSelected: (selected === index)
      })
    );
    return (
      <div className='tab-container'>
        {childrenWithProps}
      </div>
    )
  }
}

export class TabContentContainer extends Component {
  render(){
    const {children, selected} = this.props
    return (
      <div> 
        {children[selected]}
      </div>
    )  
  };
  
}

export const TabContent = (props) => {
  const {children} = props;
  return (
    <div 
      className='display-container'>
      <div className='display'>
        {children}
      </div>
    </div>
  );
}


export const Tab = (props) => {
  const {isSelected, name, disabled, handleSelect} = props;
  return (
        <button
          className='tab' 
          onClick={handleSelect}
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
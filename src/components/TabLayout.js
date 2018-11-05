import React, {Component} from 'react'
import Tab from './Tab'
import Content from '../utils/content.json'
import ContentBox from './ContentBox'
import PropTypes from 'prop-types'

class TabLayout extends Component {
  state = {
    currentTab: 1,
    content: ''
  }

  updateTab = (tabID) => {
    console.log(tabID,  "has called me");
    this.setState(() => ({
      currentTab: tabID,
      content: Content[tabID].content
    }));
  }

  render(){
    return(
      <div className='tab-layout-container'>
        <div className='tab-container'>
          {Object.values(Content).map(tab => {
            return(
                <Tab
                  key={tab.tabID} 
                  tabID={tab.tabID} 
                  name={tab.name} 
                  handleClicked={this.updateTab} 
                  isSelected={this.state.currentTab === tab.tabID}
                 />
            )
          })}
        </div>
        <ContentBox content={this.state.content}/>
      </div>
    )
  }
}

export default TabLayout;
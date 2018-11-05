import React, {Component} from 'react'
import Tab from './Tab'
import Content from '../utils/Content'
import ContentBox from './ContentBox'
import PropTypes from 'prop-types'

class TabLayout extends Component {
  state = {
    currentTab: 1,
    lastTab: Object.keys(Content).length,
    content: ''
  }

  updateTab = (tabID) => {
    this.setState(() => ({
      currentTab: tabID,
      content: Content[tabID].content
    }));
  }

  appendTab =() => {
    let next = this.state.lastTab + 1;
    let obj = {
        "tabID": next,
        "name" : `Tab ${next}`,
        "content": `some random content ${next}`
    }
    Content[next] = obj;
    this.setState(() => ({
      currentTab: next,
      lastTab: next,
      content: Content[next].content
    }))
  }

  removeTab = (currentTab) => {
    let nextTab = currentTab - 1;
    console.log(nextTab);
    delete Content[currentTab];
    this.setState(() => ({
      currentTab: nextTab,
      lastTab: Object.keys(Content).length,
      content: Content[nextTab].content
    }))
  }


  render(){
    return(
      <div className='tab-layout-container'>
        <div className='tab-container'>
          {Object.values(Content).map(({tabID, name})=> {
            return(
                <Tab
                  key={tabID} 
                  tabID={tabID} 
                  name={name} 
                  handleClicked={this.updateTab} 
                  isSelected={this.state.currentTab === tabID}
                 />
            )
          })}
        </div>
        <ContentBox content={this.state.content}/>
        <button onClick={() => this.appendTab()}>Append Tab</button>
        <button onClick={() => this.removeTab(this.state.currentTab)}>Remove Tab</button>

      </div>
    )
  }
}

export default TabLayout;
import React, { Component } from 'react';
import TabLayout, {Tab, ContentBox, TabContainer} from './components/TabLayout'

class App extends Component {
  render() {
    return (
      <div>
        <TabLayout 
          selected="2">
          <TabContainer>
            <Tab name="Tab 1" tabID="1"/>  
            <Tab name="Tab 2"/>  
            <Tab />  
            <Tab />  
          </TabContainer>
          <ContentBox />
        </TabLayout>
      </div>
    );
  }
}

export default App;

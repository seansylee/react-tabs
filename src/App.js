import React, { Component } from 'react';
import TabLayout, {Tab, TabContent, TabContainer} from './components/TabLayout'

class App extends Component {
  render() {
    return (
      <div>
        <TabLayout 
          selected="2">
          <TabContainer>
            <Tab name="Tab 1" tabID="1"/>  
            <Tab name="Tab 2" tabID="2"/>  
            <Tab name="Tab 3" tabID="3"/>  
            <Tab name="Tab 4" tabID="4"/>  
          </TabContainer>
          <TabContent tabID="1">
            <h1>IM TAB 1</h1>
          </TabContent>
          <TabContent tabID="2">
            <h1>IM TAB 2</h1>
          </TabContent>
          <TabContent tabID="3">
            <h1>IM TAB 3</h1>
          </TabContent>
          <TabContent tabID="4">
            <h1>IM TAB 4</h1>
          </TabContent>
        </TabLayout>
      </div>
    );
  }
}

export default App;

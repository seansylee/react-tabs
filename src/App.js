import React, { Component } from 'react';
import TabLayout, {Tab, TabContent, TabContentContainer, TabContainer} from './components/TabLayout'

class App extends Component {
  render() {
    return (
      <div>
        <TabLayout>
          <TabContainer>
            <Tab name="Tab 1" />  
            <Tab name="Tab 2" />  
            <Tab name="Tab 3" />  
            <Tab name="Tab 4" />  
          </TabContainer>
          <TabContentContainer>
            <TabContent>
              <h1>IM TAB 1</h1>
            </TabContent>
            <TabContent>
              <h1>IM TAB 2</h1>
            </TabContent>
            <TabContent>
              <h1>IM TAB 3</h1>
            </TabContent>
            <TabContent>
              <h1>IM TAB 4</h1>
            </TabContent>
          </TabContentContainer>
        </TabLayout>
      </div>
    );
  }
}

export default App;


// React.createElement
# React Tabs

This is a reusable tab component, created using `create-react-app`

## Getting Started

You will first need to clone this repo 

```
$ git clone git@github.com:seansylee/react-tabs.git
```
Then, install dependencies
```
$ npm install
```

## Usage

Here is an example usage.

```
import {TabLayout, TabContainer, TabContent, Tab} from './components/TabLayout'

export const Tabs = () => {
  return(
    <TabLayout>
      <TabContainer>
        <Tab name="Tab 1" tabID="1"/>
        <Tab name="Tab 2" tabID="2"/>
      <TabContainer/>
      <TabContent tabID="1">
        <div> THIS IS THE CONTENT FOR TAB 1<div/>
      <TabContent/>
      <TabContent tabID="2">
        <div> MORE CONTENT FOR TAB 2<div/>
      <TabContent/>
    <TabLayout />
  )
}
```

## Components



### <Tab/>

Each tab component

#### props
`name` Display name for the Tab component
`tabID` ID to be associated for the unique tab (Will be used to connect to the corresponding `<TabContent/>`)

### <TabContent/>

Display box for content of each Tab,

#### props
`tabID` ID tied to each `<Tab/>` component
#### Specific usage
Rendered using `props.children`
```
<TabContent tabID="1">
  ...
  ...
  <div>
    Any other content
  <div/>
<TabContent/>
```

### <TabLayout/>
The overall container for all the components with this app.
### <TabContainer/>
Container for the `<Tab/>` components, horizontally organized.


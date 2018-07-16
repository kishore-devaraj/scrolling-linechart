# Scrolling-linechart

Need of linechart react-component which should have abiltiy to add the values at the runtime, also scrollable when the data 
exceeds the parent container? then here is the npm package which solves your problem.

# Steps to install
- Install the stable package from npm registry.
```
npm install scrolling-linechart
```

- Import the component in your project and playaround with it
```
import ScrollingLinechart from 'scrolling-linechart';

....

render() {
   <ScrollingLineChart />
  }
  
....
```

# Notable Caveats
- The parent container has fixed width and height of 600px and 300px respectively, this can be made into customizable in the upcoming version
- Currently the chart is wrapped with react component and can be only used in reactjs projects.

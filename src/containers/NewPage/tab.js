import React, { Component } from 'react'
// import './ran-kers.css'
import { Tab } from 'semantic-ui-react'

export class tab extends Component {
    
    render() {
        const panes = [
            { menuItem: 'Tab 1', render: () => <Tab.Pane>
                <div class="ui link cards">
  <div class="card" style={{width:"250px"}}>
    <div class="image">
      <img src="https://cdn.lynda.com/course/718665/718665-637286247486948991-16x9.jpg"/>
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  <div class="card" style={{width:"250px"}}>
    <div class="image">
      <img src="https://cdn.lynda.com/course/718665/718665-637286247486948991-16x9.jpg"/>
    </div>
    <div class="content">
      <div class="header">Molly</div>
      <div class="meta">
        <span class="date">Coworker</span>
      </div>
      <div class="description">
        Molly is a personal assistant living in Paris.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2011
      </span>
      <span>
        <i class="user icon"></i>
        35 Friends
      </span>
    </div>
  </div>
  <div class="card" style={{width:"250px"}}>
    <div class="image">
      <img src="https://cdn.lynda.com/course/718665/718665-637286247486948991-16x9.jpg"/>
    </div>
    <div class="content">
      <div class="header">Elyse</div>
      <div class="meta">
        <a>Coworker</a>
      </div>
      <div class="description">
        Elyse is a copywriter working in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2014
      </span>
      <span>
        <i class="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>

   <div class="card" style={{width:"250px"}}>
    <div class="image">
      <img src="https://cdn.lynda.com/course/718665/718665-637286247486948991-16x9.jpg"/>
    </div>
    <div class="content">
      <div class="header">Elyse</div>
      <div class="meta">
        <a>Coworker</a>
      </div>
      <div class="description">
        Elyse is a copywriter working in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2014
      </span>
      <span>
        <i class="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>
</div>
            </Tab.Pane> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
          ]
        return (
            <div>
                <Tab panes={panes} renderActiveOnly={true} />
            </div>
        )
    }
}



export default tab

import React, { Component } from 'react';

class Home extends Component{
  render () {
    return (
      <div>
        <div class="head">
          //main menu goes here.
        </div>
        <div class= "logo">
          <img scr="https://files.slack.com/files-pri/T055GEHEJ-FF1LCANA3/logo-design-3.png" alt="Logo one"/>
        </div>
        <div class="body">
        <div class="search">
          //API goes here, sreach bar.
        </div>
        <div class="results">
          //Results from sreach go here.
        </div>
        <div class="foot">
          <p>All right reserved Jacobaallen.com, copyright 2018.</p>
        </div>
      </div>
    </div>
    )
  }
}


export default Home;

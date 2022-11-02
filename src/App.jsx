import { Component } from 'react'
import cat from './assets/pexels.jpeg'
import './App.css'

class App extends Component{

  constructor(props){
    super(props)
     
    // Set initial state
    this.state = ''
     
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(){
   
    // Changing state
    this.setState({person : [
      {
      fullName:'Ibukun Peter',
      bio:'Experienced and ambitious web design professional seeking an opportunity as a front-end developer. Detail-oriented professional with an associate degree in computer science and five years of experience with a web development firm. Pursuing front-end developer roles so I can use my specialized SEO and debugging skills.', 
      imgSrc:{cat}, 
      profession:'FrontEnd Developer',
      show:false,}  
    ]})
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.toggle}>
          {this.state.show ? 'SHOW ME' : {}}
        </button>     */}
        <h2>My profile:</h2>
        <p>{this.state.person}</p>
          {/* Set click handler */}
          <button onClick={this.handleClick}>
                    Click here!
                  </button>

      </div>
     );
  }
}

export default App


import { Component } from 'react';
import './App.css';

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {seconds:0}
}
  tick(){
    this.setState(state => ({
      seconds:state.seconds + 1
    }))

    
    
  }
  componentDidMount(){
    this.interval = setInterval(() => this.tick(),1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render(){
    return(
      <div>
        Секунды:  {this.state.seconds}
      </div>
    )
  }
}


function App() {
  return (
   <div>
   <Timer/>
   </div>
  );
}

export default App;

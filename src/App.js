import {Component} from 'react';
import './App.css';

const Header = () => {
  return  <h2>Hello world</h2>
}

// const Field = () => {
  // const holder = 'Enter here';
  // const styledField = {
  //   width: '300px'
//   };
//   return <input 
//           placeholder={holder} 
//           type='text' 
//           style={styledField}/>
// }

class Field extends Component {
   render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
   };

   return <input 
          placeholder={holder} 
          type='text' 
          style={styledField}/>
}
}

function Btn() {
  const text = 'Log in';
  const logged = true;
  // const res = () => {
  //   return 'Log in';
  // }
  // const p = <p>Log in</p>
  return <button>{logged ? 'Enter' : text}</button>
}

class WhoAmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
      text: '+++',
      position: 'a'
    }
    // this.nextYear = this.nextYear.bind(this);
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1,
      text: state.text
    }))
  }

  commitInputChanges = (e, color) => {
    // console.log(color);
    this.setState({
      position: e.target.value,
      my_color: color
    });
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years, my_color} = this.state;
    console.log(this);
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, 
            age - {years}, 
            position - {position},
            color - {my_color}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
        </form>
      </div>  
      
      );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmi name='John' surname={'Gorbachev'} link='https://vk.com/feed'/>
      <WhoAmi name='Artem' surname={'Smith'} link='https://vk.com'/>

      {/* <Header/>
      <Field/>
      <Btn/> */}
    </div>
  );
}

export {Header};
export default App;


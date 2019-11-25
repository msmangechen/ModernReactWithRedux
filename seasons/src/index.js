import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // 当App Component被创建的时候，constructor用于是第一个被call的，before anything else
  // constructor(props) {
  //   super(props); // make sure the parent or React.Component get call
  //
  //   // THIS IS THE ONLY TIME we do direct assignment to this.state
  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   };
  // }

  // equal to this.state = {} in constructor
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rendered!');
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      // take state from component and pass it as props to the child
      return <SeasonDisplay lat={this.state.lat} />;
    }

    // override the default message loading
    return <Spinner message="Please accept location request"/>;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

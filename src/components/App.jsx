class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: props.videoCollectionData[0]
    };
  }

  onVideoClick() {
    console.log(props.videoComponent);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.props.videoCollectionData[0]}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videoCollection={this.props.videoCollectionData} clickEvent={this.onVideoClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}


/*var App = (props) => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><Search /></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><VideoPlayer video={props.videoCollectionData[0]}/></div>
      </div>
      <div className="col-md-5">
        <div><VideoList videoCollection={props.videoCollectionData}/></div>
      </div>
    </div>
  </div>
);*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



//exVD = [{obj1}, {obj2}, {obj3}]

// props = {
//   videoCollection: {"videos"},
// }
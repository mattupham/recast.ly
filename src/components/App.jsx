class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoCollection: this.props.videoCollectionData,
      currentVideo: this.props.videoCollectionData[0]
    }
  }

  onVideoClick(props) {
    this.setState({ currentVideo: props.videoComponent });
  }

  updateVideoCollection(data){
    this.setState({ currentVideoCollection: data.items, currentVideo: data.items[0] });
  }

  onSearchRequest(callback) {
    //save the search text into a variable (not using jQuery, but vanilla JS) -- save search into object
    var options = {}
    options.query = document.getElementsByClassName('form-control')[0].value;
    console.log(options.query);
    searchYouTube(options, callback);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onSearch={this.onSearchRequest.bind(null, this.updateVideoCollection.bind(this))}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videoCollection={this.state.currentVideoCollection} clickEvent={this.onVideoClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

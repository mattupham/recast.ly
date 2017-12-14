var App = (props) => (
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
        {console.log(props.videoCollectionData[0])}
        <div><VideoList videoCollection={props.videoCollectionData}/></div>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



//exVD = [{obj1}, {obj2}, {obj3}]

// props = {
//   videoCollection: {"videos"},
// }
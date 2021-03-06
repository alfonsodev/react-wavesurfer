import React from 'react';
import ReactDOM from 'react-dom';

import RegionsExample from './components/regions';
import ZoomExample from './components/zoom';
import SimpleExample from './components/simple';
import TimelineExample from './components/timeline';

function ExampleParent() {
  return (
    <div className="container main-container">
      <div className="row">
        <h1 className="col-xs-12 col-lg-2">react-wavesurfer examples</h1>
        <div className="col-xs-12 col-lg-8 col-lg-push-1">
          <div className="row">
            <SimpleExample />
          </div>
          <div className="row">
            <RegionsExample />
          </div>
          <div className="row">
            <ZoomExample />
          </div>
          <div className="row">
            <TimelineExample />
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ExampleParent />, document.getElementById('app'));

import React from "react";
import { Image , Header} from "semantic-ui-react";

import SVG from "react-inlinesvg";

import Iframe from "react-iframe";

class SvgLoader extends React.Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
    !this.props.isCompleted ?(  <div>
        <Iframe
          url="/Loader.html"
          width="900px"
          height="287px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
          frameBorder={0}
        />

       <div>
        
         <div>
          <b>Currently Proccessing</b>
         </div> 
          {this.props.currentFile}
       </div>
      </div>) : <Header white inverted  as="h1"> Completed </Header>
    );
  }
}

export default SvgLoader;

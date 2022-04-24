import React from "react";
import "./../assets/styles/controls.css";

 


const Controls = function ( props ) {

  const { handlers } = props
  // console.log(handlers.changeImage)

  return (
    <div>
      <div className="controls">
        <section>
          <input type="text" onInput={ handlers.updateTopText } placeholder="Top Section" />
          <input type="text" onInput={ handlers.updateBottomText } placeholder="Bottom Section" />
        </section>
        <section>
          <button onClick={ handlers.changeImage }>Get a new meme Image</button>
        </section>
      </div>
    </div>
  );
};

export default Controls;

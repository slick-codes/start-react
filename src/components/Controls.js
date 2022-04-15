
import './../assets/styles/controls.css';

const Controls = function(){

    return ( 
        <div className="controls">
            <section>
                <input type="text" placeholder="Top Section"  />
                <input type="text" placeholder="Bottom Section"  />
            </section>
            <section>
                <button>Get a new meme Image</button>
            </section>
        </div>
    )
}

export default Controls 
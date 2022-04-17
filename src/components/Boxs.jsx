


import Box from './Box';
import boxData from './../data/boxdata'
import React from 'react';

const Boxs = function(props){

    let [ boxConfig, setBoxConfig  ] = React.useState(boxData)
    
    const boxs = boxConfig.map( (box, index) => {
        function toggleTheme(){
            setBoxConfig( oldConfig => {
                return oldConfig.map( (config , i) =>  index === i? {...config, darkMode: !config.darkMode} : config )
            })
        }
        
        return <Box darkMode={box.darkMode} handleThemeToggler={ toggleTheme } key={index} />
    })

    return (
        <div className="boxs__container">
            { boxs } 
        </div>
    )
}

export default Boxs
import React from 'react';

const Will = () => {
    var [ width, setWidth ] = React.useState(10);
    const handleSetWidth = (event) => {
      setWidth(event.target.value);
    }
    return (<div>
      <input type="range" step="10" value={width} onChange={handleSetWidth} /> {width}
      <img className="eldiv" style={{ width: width + 'px' }} src="https://pngimage.net/wp-content/uploads/2018/05/face-png-transparent-5.png" />
    </div>)
}

export default Will;
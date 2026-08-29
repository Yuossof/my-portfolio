import Crosshair from './Crosshair';
import React from 'react';

export const Componentx = ({containerRef}: {containerRef: React.RefObject<HTMLDivElement | null>}) => {

return (
  <div ref={containerRef} style={{ overflow: 'hidden' }} className='absolute top-0 left-0 right-0 bottom-0 -z-1'>
    <Crosshair containerRef={containerRef} color='#c7c3c3'/> 
  </div>
)
};
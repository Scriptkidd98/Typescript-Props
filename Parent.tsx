import React, {useState} from 'react';
import Child from './Child';

const Parent: React.FC = () => {
    const [name, setName] = useState<string>('Parent');
  return (
    <div>
        <p>This is a parent element</p>
        <Child name={name} setName={setName}></Child>
    </div>
  )
}

export default Parent
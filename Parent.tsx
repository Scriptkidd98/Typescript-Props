import React, {useState} from 'react';

const Parent: React.FC = () => {
    const [name, setName] = useState<string>('Parent');
  return (
    <div>
        <p>This is a parent element</p>
    </div>
  )
}

export default Parent
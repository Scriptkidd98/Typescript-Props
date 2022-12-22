import React, {useState} from 'react';

const Child: React.FC = () => {
    const [name, setName] = useState<string>('Child');
  return (
    <div>
        <p>This is a child component</p>
    </div>
  )
}

export default Child
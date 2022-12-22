import React, {useState} from 'react';


type Props = {
    name : string;
    setName : (val: string) => void;
}

const Child: React.FC = () => {
    const [name, setName] = useState<string>('Child');
  return (
    <div>
        <p>This is a child component</p>
    </div>
  )
}

export default Child
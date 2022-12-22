import React from 'react';


type Props = {
    name : string;
    setName : (val: string) => void;
}

const Child: React.FC<Props> = ({name, setName}) => {
    console.log(name)
  return (
    <div>
        <p>This is a child component</p>
        <button onClick={() => setName('New Parent State')}>Change Parent State</button>
    </div>
  )
}

export default Child
import React, { useState } from 'react'

function Character({charName, home}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
    const [show, setShow] = useState(false);
  // ❗ Create a "toggle" click handler to show or remove the homeworld
    const toggleHomeWorld = () => {
      setShow(!show)
    }

  return (
    <div className='character-card' onClick={toggleHomeWorld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <p className='character-name'>{charName}</p>
      {show ? <p className='character-planet'>{home.name}</p> : null}
    </div>
  )
}

export default Character

import * as React from 'react'
const { useState } = React

const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)


  function toogle()  {
    setIsVisible(!isVisible)
  }

  return {
    isVisible,
    toogle
  }
}

export default useModal
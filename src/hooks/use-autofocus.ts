import {useEffect, useRef} from 'react'

const useAutofocus = (initialValue: HTMLInputElement | null) => {
  const reference = useRef<HTMLInputElement>(initialValue)

  useEffect(() => {
    if (reference?.current) {
      reference?.current?.focus()
    }
  }, [reference?.current]);

  return reference
};

export default useAutofocus;
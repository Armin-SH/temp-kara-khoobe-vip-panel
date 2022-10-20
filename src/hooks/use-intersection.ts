import {RefObject, useEffect, useState} from 'react'

const useIntersection = (element: RefObject<any>, rootMargin: string) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      }, {rootMargin}
    );

    element?.current && observer?.observe(element?.current);
    const cleanUp = element?.current

    return () => observer.unobserve(cleanUp);
  }, []);

  return isVisible;
};

export default useIntersection;
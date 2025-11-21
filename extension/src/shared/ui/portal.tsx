import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: PropsWithChildren) => {
  const [container] = useState(() => document.createElement('div'));

  useLayoutEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

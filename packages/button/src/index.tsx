import React, { useRef } from 'react'
import { useButton } from '@react-aria/button';

function Button(props) {
  let {children} = props;
  let ref = useRef();
  let {buttonProps, isPressed} = useButton(
    {
      ...props,
      elementType: 'span'
    },
    ref
  );

  return (
    <span
      {...buttonProps}
      className={ `${ props.variant==="secondary" ?
                   'bg-secondary text-black' : 'bg-primary text-white' }
                    px-4 py-2 bg-primary text-white rounded-lg` }
      ref={ref}>
      {children}
    </span>
  );
}

export { Button };

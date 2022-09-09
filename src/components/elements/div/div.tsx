import React, {forwardRef} from 'react';
import {DivProps} from './div.props'
import styles from './div.module.css'

const Div = forwardRef<any, DivProps>(function Div(props, ref) {
  const {children, className, style, onClick, mobile, tablet, desktop, dangerouslySetInnerHTML, role, id, dataTestId, ...rest} = props;

  const desktopDirection = `${desktop}DesktopClass`;
  const tabletDirection = `${tablet}TabletClass`;
  const mobileDirection = `${mobile}MobileClass`;

  return (
    <div
      id={id}
      role={role}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      onClick={onClick}
      style={style}
      className={`${styles.defaultClass} ${styles[desktopDirection]} ${styles[tabletDirection]} ${styles[mobileDirection]} ${className}`}
      ref={ref}
      data-testid={dataTestId}
      {...rest}
    >
      {children}
    </div>
  )
})

Div.defaultProps = {
  dataTestId: 'div-test-id',
}

export default Div;

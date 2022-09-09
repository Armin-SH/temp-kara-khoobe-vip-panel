import React from 'react';
import {MediaProps} from "./media.props";
import styles from './media.module.css';

export const Media = ({children, style, className, ...restProps}: MediaProps) => {
  let cssStyle = 'display-none';

  if (restProps.at) {
    cssStyle = `at-${restProps.at}`;
  }
  if (restProps.lessThan) {
    cssStyle = `lessThan-${restProps.lessThan}`;
  }
  if (restProps.greaterThan) {
    cssStyle = `greaterThan-${restProps.greaterThan}`;
  }
  if (restProps.greaterThanOrEqual) {
    cssStyle = `greaterThanOrEqual-${restProps.greaterThanOrEqual}`;
  }
  if (restProps.between) {
    cssStyle = `between-${restProps.between}`;
  }

  return (
    <div className={`${styles[cssStyle]} ${className}`} style={style}>{children}</div>
  );
}

export default Media;
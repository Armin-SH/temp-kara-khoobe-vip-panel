import React from 'react';
import Skeleton from '@mui/material/Skeleton'
import {SkeletonProps} from './skeleton.props'
import {styled} from "@mui/material/styles";

const StyledSkeleton = styled(Skeleton)<SkeletonProps>((props: SkeletonProps) => ({
  "&.MuiSkeleton-root": {
    backgroundColor: '#989898'
  }
}))

const CustomSkeleton = (props: SkeletonProps) => {
  const {variant, className, height, width, animation, color, ...rest} = props;

  return (
    <StyledSkeleton className={className} color={color} variant={variant} height={height} width={width} animation={animation} {...rest} />
  )
}

CustomSkeleton.defaultProps = {
  color: "control",
  animation: 'wave',
}

export default CustomSkeleton

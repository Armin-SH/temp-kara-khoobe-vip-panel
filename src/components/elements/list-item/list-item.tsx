import React from 'react';
import {ListItem as MaterialListItem} from '@mui/material'
import {ListItemProps} from './list-item.props'
import {styled} from '@mui/material/styles'

const StyledListItem = styled(MaterialListItem)(({theme}) => ({
  display: 'flex',
  flexDirection: "row-reverse"
}))

const ListItem = (props: ListItemProps) => {

  const {children, divider, button, onClick, disablePadding, className, ...rest} = props;

  return (
    <StyledListItem className={className} onClick={onClick} button={button} divider={divider} disablePadding={disablePadding} {...rest}>
      {children}
    </StyledListItem>
  )
}

export default ListItem

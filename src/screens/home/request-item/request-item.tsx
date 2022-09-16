import React from 'react'
import {Media} from "@elements";
import {RequestItemProps} from './request-item.props'
import 'react-circular-progressbar/dist/styles.css';
import MobileRequestItem from './mobile'
import TabletRequestItem from './tablet'
import DesktopRequestItem from './desktop'

const RequestItem = (props: RequestItemProps) => {

  const {inProgressCounter, doneCounter, title, subTitle, totalCounter, buttonTitle, header} = props

  return (
      <>
        <Media at={"xs"}>
          <MobileRequestItem
              title={title}
              subTitle={subTitle}
              buttonTitle={buttonTitle}
              totalCounter={totalCounter}
              inProgressCounter={inProgressCounter}
              doneCounter={doneCounter}
              header={header}
          />
        </Media>
        <Media at={"sm"}>
          <TabletRequestItem
              title={title}
              subTitle={subTitle}
              buttonTitle={buttonTitle}
              totalCounter={totalCounter}
              inProgressCounter={inProgressCounter}
              doneCounter={doneCounter}
              header={header}
          />
        </Media>
        <Media style={{flex: 1}} greaterThan={"sm"}>
          <DesktopRequestItem
              title={title}
              subTitle={subTitle}
              buttonTitle={buttonTitle}
              totalCounter={totalCounter}
              inProgressCounter={inProgressCounter}
              doneCounter={doneCounter}
              header={header}
          />
        </Media>
      </>
  )
}

export default RequestItem
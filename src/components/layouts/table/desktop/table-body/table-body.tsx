import React, {useContext} from 'react'
import {Div, Text} from '@elements'
import TableColumn from '../table-column'
import styles from './table-body.module.css'
import {TableContext} from '../desktop-table'

const TableBody = () => {

  const context = useContext(TableContext)


  return (
    <Div className={styles.container}>
      <Div className={styles.headerBackground}/>
      {context.state.selectRows ? (
        <TableColumn headerData={'selectRows'} columnData={context.state?.data?.selectedRows} cellName={'selectRows'}/>
      ) : null}
      {context.state.cellKeys.map((item, index) => {
        return (
          // @ts-ignore
          <TableColumn headerData={context.state.header[index]} columnData={context.state.data[item]} cellName={item} key={`column_${index}`}/>
        )
      })}
      {context.state.expandable ? (
        <>
          <TableColumn headerData={'expandable'} columnData={context?.state.expandArray} cellName={'expandable'}/>
          {context.state.expandArray.map((item: any, index: number) => {

            const expandClassName = `${item}ExpandContainer`
            const sectionClassName = `${item}SectionContainer`
            const topCalculator = 165 + (index * 48)
            return (
              <Div key={index} style={{top: `${topCalculator}px`}} className={styles[expandClassName]}>
                {context.state.expandKey ? (
                  <Div className={styles[sectionClassName]}>
                    <Text color={'grey.500'} align={'right'} typography={'tiny'}>
                      به گزارش خبرگزاری صدا و سیما ، اپلیکیشن « کاراخوبه » در راستای مهارت محوری و اشتغال آفرینی، طی تفاهم نامه‌ای با سازمان آموزش فنی و حرفه‌ای
                      آماده خدمت رسانی به عموم مردم است .
                    </Text>
                  </Div>
                ) : (
                  <>
                    <Div className={styles[sectionClassName]}>
                      <Text color={"grey.900"} typography={"tiny"} type={'bold'}>
                        دسته تخصص :
                      </Text>
                      <Text color={"grey.900"} typography={"tiny"}>
                        نظافت
                      </Text>
                    </Div>
                    <Div className={styles[sectionClassName]}>
                      <Text color={"grey.900"} typography={"tiny"} type={'bold'}>
                        تخصص :
                      </Text>
                      <Text color={"grey.900"} typography={"tiny"}>
                        نظافت دوره ای
                      </Text>
                    </Div>
                    <Div className={styles[sectionClassName]}>
                      <Text color={"grey.900"} typography={"tiny"} type={'bold'}>
                        شماره تماس :
                      </Text>
                      <Text color={"grey.900"} typography={"tiny"}>
                        09385450060
                      </Text>
                    </Div>
                    <Div className={styles[sectionClassName]}>
                      <Text color={"grey.900"} typography={"tiny"} type={'bold'}>
                        استان :
                      </Text>
                      <Text color={"grey.900"} typography={"tiny"}>
                        تهران
                      </Text>
                    </Div>
                    <Div className={styles[sectionClassName]}>
                      <Text color={"grey.900"} typography={"tiny"} type={'bold'}>
                        شهر :
                      </Text>
                      <Text color={"grey.900"} typography={"tiny"}>
                        تهران
                      </Text>
                    </Div>
                  </>
                )}

              </Div>
            )
          })}
        </>
      ) : null}
      {context.state.modal ? (
        <TableColumn headerData={'modal'} columnData={context.state.data[context.state.cellKeys[0]]} cellName={'modal'}/>
      ) : null}
      {context.state.actions ? (
        <TableColumn headerData={'actions'} columnData={context?.state.data?.selectedRows} cellName={'actions'}/>
      ) : null}
    </Div>
  )
}

export default TableBody;
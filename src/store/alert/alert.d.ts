type CallBackType = () => null

export interface AlertReducerTypes {
  isShow: boolean
  text: string | undefined
  severity: 'success' | 'info' | 'warning' | 'error' | undefined
  isShowErrorModal: boolean
  title: string | undefined
  subtitle: string | undefined
  primaryErrorIcon: string
  secondaryErrorIcon: string
  actionCallback: CallBackType | undefined
  acceptCallback: CallBackType | undefined
  denyCallback: CallBackType | undefined
  acceptButtonTitle: string
  denyButtonTitle: string
  reSendCodeCallBack: CallBackType | undefined
  changeNumberCallBack: CallBackType | undefined
}
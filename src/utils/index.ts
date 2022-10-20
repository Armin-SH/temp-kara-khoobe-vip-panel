import {clearCookie, getFromCookie, removeFromCookie, saveToCookie} from './cookie'
import {typography} from './typography'
import {addDays, convertDate, momentFormat, timePassed, timeIsAfter, timeDifference} from './time-helper'
import getParseUrl from './parse-url'
import sha1Hash from './sha1-hash'
import isPersian from './is-persian'
import nationalIdValidation from './national-id-validation'
import persianToEnglish from './persian-to-english-number'
import {validMobileNumber} from './phone-validation'
import pressEnterKey from './press-enter-key'

export {
  removeFromCookie,
  clearCookie,
  saveToCookie,
  getFromCookie,
  typography,
  convertDate,
  momentFormat,
  timePassed,
  timeIsAfter,
  timeDifference,
  addDays,
  getParseUrl,
  sha1Hash,
  persianToEnglish,
  isPersian,
  pressEnterKey,
  nationalIdValidation,
  validMobileNumber,
}
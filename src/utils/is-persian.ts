const isPersian = (str: string) => {
  const regx = /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F ]*$/;

  return regx.test(str)
}

export default isPersian;
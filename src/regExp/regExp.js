export const idCheck = id => {
  let regExp = /^[a-zA-Z0-9]{4,12}$/;
  // 대문자 포함 4글자 이상 12글자 이하
  return regExp.test(id);
};

export const nickCheck = nick => {
  let regExp = /^[0-9a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  return regExp.test(nick);
};

export const emailCheck = email => {
  let _reg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

  return _reg.test(email);
};

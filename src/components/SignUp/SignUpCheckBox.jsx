import style from './SignUpCheckBox.module.css';

const checkService = {
  checkOptAge: '만 14세 이상입니다.',
  checkServiceReq01: '[필수] 서비스 이용약관 동의',
  checkServiceReq02: '[필수] 개인정보 수집 및 서비스 활용 동의',
  checkServiceReq03: '[필수] 채널 홈페이지 개인정보 제 3자 제공동의',
  checkServiceOpt04: '[선택] 개인정보 제 3자 제공동의',
  checkServiceOpt05: '[선택] 개인정보 수집 및 서비스 활용 동의',
  checkSubServiceOpt01: '[선택] 마케팅 정보 SMS 수신동의',
  checkSubServiceOpt02: '[선택] 마케팅 정보 이메일 수신동의',
};

export function SignUpCheckBox() {
  return (
    <>
      <div>
        <input type="checkbox" id="checkAll" />
        <label htmlFor="checkAll">모두 동의합니다.</label>
      </div>
      <ul>
        <li>
          <input type="checkbox" id="checkOptAge " />
          <label htmlFor="checkOptAge ">{checkService.checkOptAge}</label>
        </li>
        <li>
          <input type="checkbox" id="checkServiceReq01 " />
          <label htmlFor="checkServiceReq01 ">
            {checkService.checkServiceReq01}
          </label>
        </li>
        <li>
          <input type="checkbox" id="checkServiceReq02" />
          <label htmlFor="checkServiceReq02">
            {checkService.checkServiceReq02}
          </label>
        </li>
        <li>
          <input type="checkbox" id="checkServiceReq03" />
          <label htmlFor="checkServiceReq03">
            {checkService.checkServiceReq03}
          </label>
        </li>
        <li>
          <input type="checkbox" id="checkServiceOpt04" />
          <label htmlFor="checkServiceOpt04">
            {checkService.checkServiceOpt04}
          </label>
        </li>
        <li>
          <input type="checkbox" id="checkServiceOpt05" />
          <label htmlFor="checkServiceOpt05">
            {checkService.checkServiceOpt05}
          </label>
          <ul className={style.subUi}>
            <li>
              <input type="checkbox" id="checkSubServiceOpt01" />
              <label htmlFor="checkSubServiceOpt01">
                {checkService.checkSubServiceOpt01}
              </label>
            </li>
            <li>
              <input type="checkbox" id="checkSubServiceOpt02" />
              <label htmlFor="checkSubServiceOpt02">
                {checkService.checkSubServiceOpt02}
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

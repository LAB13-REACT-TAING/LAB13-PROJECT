/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import { useState, useEffect, useRef } from 'react';
import style from './SignUpCheckBox.module.css';

const checkService = {
  checkOptAge: '만 14세 이상입니다.',
  checkServiceReq01: '[필수] 서비스 이용약관 동의',
  checkServiceReq02: '[필수] 개인정보 수집 및 서비스 활용 동의',
  checkServiceReq03: '[필수] 채널 홈페이지 개인정보 제 3자 제공동의',
  checkServiceOpt04: '[선택] 개인정보 제 3자 제공동의',
  checkServiceOpt05: '[선택] 개인정보 수집 및 서비스 활용 동의',
  checkServiceOpt06: '[선택] 마케팅 정보 SMS 수신동의',
  checkServiceOpt07: '[선택] 마케팅 정보 이메일 수신동의',
};

const checkServiceKey = Object.keys(checkService);

export function SignUpCheckBox() {
  const [checkServiceList, setCheckServiceList] = useState([]);
  useEffect(() => {}, []);

  const onChangeCheckAllHandler = e => {
    const isAllChecked = e.target.checked;
    isAllChecked
      ? setCheckServiceList(checkServiceKey)
      : setCheckServiceList([]);
  };

  const onChangeCheckServiceHandler = e => {
    e.target.checked
      ? setCheckServiceList([...checkServiceList, e.target.id])
      : setCheckServiceList(
          checkServiceList.filter(remain => remain !== e.target.id),
        );
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="checkAll"
          onChange={onChangeCheckAllHandler}
          checked={checkServiceList.length === 8}
        />
        <label htmlFor="checkAll">모두 동의합니다.</label>
      </div>
      <ul>
        <li>
          <input
            type="checkbox"
            id="checkOptAge"
            name="checkService"
            checked={checkServiceList.includes('checkOptAge')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkOptAge ">{checkService.checkOptAge}</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceReq01"
            name="checkService"
            checked={checkServiceList.includes('checkServiceReq01')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceReq01 ">
            {checkService.checkServiceReq01}
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceReq02"
            name="checkService"
            checked={checkServiceList.includes('checkServiceReq02')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceReq02">
            {checkService.checkServiceReq02}
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceReq03"
            name="checkService"
            checked={checkServiceList.includes('checkServiceReq03')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceReq03">
            {checkService.checkServiceReq03}
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceOpt04"
            name="checkService"
            checked={checkServiceList.includes('checkServiceOpt04')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceOpt04">
            {checkService.checkServiceOpt04}
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceOpt05"
            name="checkService"
            checked={checkServiceList.includes('checkServiceOpt05')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceOpt05">
            {checkService.checkServiceOpt05}
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceOpt06"
            name="checkService"
            checked={checkServiceList.includes('checkServiceOpt06')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceOpt06">
            {checkService.checkServiceOpt06}
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceOpt07"
            name="checkService"
            checked={checkServiceList.includes('checkServiceOpt07')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceOpt07">
            {checkService.checkServiceOpt07}
          </label>
        </li>
      </ul>
    </>
  );
}

Popup Guide
===========
> ### Bottom Shit
## 1. 기본   
- 팝업 ID 기준으로 호출하기때문에 팝업끼리 ID가 중복되면 안됨. 중복일 경우 변경
- 팝업의 ID는 임시ID (개발에서 변경 사용 가능)
## 2. Popup Open
- 아래와 같이 함수 호출   
```
UICommon.Layer.open('#팝업ID');
```
- 콜백이벤트 삽입
```
UICommon.Layer.open('#팝업ID', function(){
    //팝업 오픈후 콜백이벤트 삽입
});
```
## 3. Popup Close
- 아래와 같이 함수 호출
```
UICommon.Layer.close('#팝업ID');
```
- 콜백이벤트 삽입
```
UICommon.Layer.close('#팝업ID', function(){
    //팝업 닫은 후 콜백이벤트 삽입
});
```
_Popup안에 있는 버튼에 Popup Close기능을 주려면 'ui_pop_close' 클래스 추가
'ui_pop_close' 클래스는 해당 용도가 아니면 에러를 발생할수 있으니 안쓸때는 삭제_
## 4. 딤 클릭 이벤트 방지
- 'bg_no_click' 클래스를 Popup 최상단에 엘리먼트에 추가
## 5. 닫기버튼 삭제
```
UICommon.Layer.open('#팝업ID','','noClose');
```
## 6. 타이틀 삭제
```
UICommon.Layer.open('#팝업ID','noTitle');
```
## 7. 타이틀 변경
```
UICommon.Layer.open('#팝업ID','타이틀변경텍스트입력');
```
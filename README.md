# frontend

1. Class 2018 - 03 - 01
    - Git은 DVCS (Distributed Version Control System)
    - Github은 온라인 Git Repository를 제공해주는 Git 서비스

    - commit, push, pull
    - Branch 생성, 원격 브랜치 생성
    - Branch Pull Request

2. 2018 - 03 - 03
    - 프로젝트 진행 순서
        1. 기획
        2. 디자인
        3. 개발
    - Waterfall vs Agile
        - Waterfall : 기획 완료 후 디자인 완료 후 개발 한번에 완료
        - Agile : 기획 - 디자인 - 개발을 short term으로 반복하며 시장 피드백을 진행에 반영
    - 외주 계약시
        - 기능명시, 작업일정, ERD 등을 포함하는 것이 좋습니다.
        - 웹 서비스 개발시 플랫폼 및 지원 브라우저 확인할 것
    
    - 모바일웹 VS 반응형
        - HTML내용이나 JS 동작에 차이가 클 땐 모바일웹
        - CSS단에서 배치가 변경되는 정도면 반응형
        ( 개발편의성 / 개발속도와 실제 서비스 속도의 트레이드 오프 )

    - HTML
        - 박스모델로 구획을 나누세요
        - row를 먼저, column을 나중에
        - semantic tag : 검색엔진 최적화

    - CSS (MDN 참고)
        - 박스모델 : box-sizing
        - 먀진상쇄
        - selector
            - universal selector ( * )
            - class selector ( .class )
            - id selector ( #id )
            - type selector ( element(tag) name )
        - combinator (연결자)
            - descendant combinator ( parentSelector childSelector)
            - child combinator ( parentSelector > childSelector)

3. 2018 - 03 - 05
    - CSS
        - CSS Selector 적용 순서는 구체적일수록 우선한다.
    - layout
        - display:inline-block
        - display:flex // 이게 더 요즘 방식

3. 2018 - 03 - 12
    - 작업영역
        - 기획
        - 디자인
        - 퍼블리싱
            - HTML, CSS, JS(일부)를 이용해 디자인을 구현해주는 작업 
        - 개발
            - Database 내용과 연결하여 실제 내용물을 삽입하는 작업
    - CSS
        - CSS 상속
            - CSS 상속 여부는 속성마다 다르다
            - 어떤게 상속되는지는 MDN에서 확인 가능하지만, 일반적으로는 텍스트 관련 속성 (color, font-size 등)은 상속되고 레이아웃 관련 속성 (display, position 등)은 상속되지 않는다.
        - float
            - 둥둥 뜨고
            - 자리 차지를 안한다.
            - 반응형에서 자식 dom의 개수가 가변적일때
        - @media
            - 특정 미디어를 선택해서 속성을 줄 때
            - media 쿼리로 지정해도 CSS 우선순위가 올라가는 것은 아니기 때문에 선택자가 같을 경우 media 쿼리를 아래쪽에 써야한다.
    - 프론트 속도는 리퀘스트 횟수를 줄여야 개선된다.
        - CDN을 이용하면 타 사이트에서도 많이 쓰는 라이브러리의 경우 캐싱 이용 가능
        - 이미지보다는 폰트 아이콘이 좋다.
            - 이미지 3개 -> 리퀘스트 3번
            - 폰트아이콘 3개 -> 리퀘스트 한번
            - 핸드쉐이킹 

4. 2018-03-17
    - fonticon
        - 커스텀 아이콘 생성이나 원하는 아이콘 골라서 쓸 땐 fontello 이용
    - icon
        - class, before selector 이용해서 컨텐츠를 넣어주면 불필요한 태그 사용을 줄일 수 있다.
    - container
        - 내용물 영역을 디바이스 크기에 따라 고정 크기로 고정하고 싶을 때 사용
        - 디자인 상 완전한 디자인은 적용이 어렵기 때문에 일반적으로 사용한다.
    - typo
        - line-height : 줄 높이
        - letter-spacing : 자간
        - text-decoration : 밑줄이나 취소선 등 데코레이션 추가
        - font-weight : 글씨 굵기 (100-700 높을수록 굵다),  normal (일반적으로 400), bold (일반적으로 700)

5. 2018-03-19
    - 많은 질문들
    - 백그라운드 반응형으로 크기지정
    - flex:1

6. 2018-03-24
    - compile vs interpreter
        - compile: 컴파일 과정, 번역 과정 ->  파일 전체 : 최적화 효율적 / 개발 어렵
        - interpreter : 한 줄 씩 입력받아서 번역 : 최적화 떨어지지만 개발이 쉽다
    - JS -> interpreter 언어
        - variable에는 데이터 형이 없다. var
        - 이벤트 핸들링 방식 : 콜백 지옥

7. 2018-03-26
    - JS의 모든 원형, 객체는 Object
        - function => Object
        - String => Object

    - event listener vs inline-event
        - 왜 event listener가 더 많이 쓰일까?
            - 유지보수가 좋음 왜?
                - inline-event는 사용하는 만큼 코드가 늘어남
            - 익명함수
                - 호이스팅 등 JS해석할 때 Symbol로 잡지 않기 때문에 부하가 적죠.
            - 로딩 차이
                - 심볼 인식이 안될 수 있음

    - 함수 선언
        - function declaration : Hoisting
        function handler() {}

        - function expression : Hoisting X
        var handler = function () {} (익명함수)
        (function literal)

    - 언어의 형태
        - 객체지향 (C++, Java, 과제로 적어오기)
            - 캡슐화
            - 상속성
            - 다형화
        - 절차지향 (C언어)
        - Prototype 언어
            - Object가 모든 객체의 Prototype
            - 각각 프로토타입을 갖는다.

    - style속성 바꿀 때 class로 처리하는게 좋은 이유
        - 우선순위가 꼬이지 않음
        - 스타일이 여러개 바뀔 때 코드 줄 수가 줄어든다.
        - 퍼블리싱을 따로 할 때 초기값 세팅시 스타일 적용 가능

    - 텍스트 비교
        - class="aa bb cc"
           ex) if (dd.indexOf('bb') >= 0)
        - == X === O
            data type까지 비교
            1 <> "1"
            if(a == 1)  // "1"도 통과
                var sum = sum + a;

    - mdn에서 꼭 스펙 확인해서 타겟 브라우저 지원 여부 확인하기
        - string : includes, indexof
        - classList : toggle, add, remove (이건 IE 지원 X)

    - form validation

8. 2018-03-31
    - form validation - Generalization

    - generic programming
        - 내용물이 바뀌어도 코드는 크게 바뀌지 않는다.

    - regular expression (regex)
        - JS에서는 /dsfsfd/
        - 또는 new Regexp()

    - CSS : + 선택자


9. 2018-04-02
    - Semantic HTML
    - Window timer event
        var timer = window.setTimeout(function(){}, 6000);
        var interval = window.setInterval(function(){}, 6000);

        window.clearTimeout(timer);
        window.clearInterval(interval);

    
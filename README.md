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

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
        - semantic tag

    - CSS (MDN 참고)
        - 박스모델 : box-sizing
        - 먀진상쇄
        - selector
            - universal selector ( * )
            - class selector ( .class )
            - id selector ( #id )
            - type selector ( element(tag) name )
        - combinator (연결자)
            - descendant combinator ( parentSelector > childSelector)
            - child combinator ( parentSelector > childSelector)
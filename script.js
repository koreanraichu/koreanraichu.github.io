// 탭메뉴용 요소
const tabList = document.querySelectorAll('.header .tab .tabbtn .btn');
const tabContents = document.querySelectorAll('.main .content .cont');
let activeContents = '';

//아코디언 패널
const accordion = document.querySelectorAll('.accordion');
const panel = document.querySelectorAll('.panel');

//메인 탭메뉴 
// var 대신 let을 사용하면 클로저 문제 없이 인덱스 i를 안전하게 쓸 수 있습니다.
for (let i = 0; i < tabList.length; i++) {
    // 이제 tabList[i]가 바로 .btn 박스이므로 그 안의 a 태그를 찾습니다.
    const anchor = tabList[i].querySelector('a');

    if (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // 1. 모든 .btn 박스에서 focus 제거 및 컨텐츠 숨기기
            for (let j = 0; j < tabList.length; j++) {
                tabList[j].classList.remove('focus');
                tabContents[j].style.display = 'none';
            }

            // 2. 클릭된 a태그의 부모인 .btn 박스에 focus 추가
            tabList[i].classList.add('focus');

            // 3. 해당 인덱스의 컨텐츠 표시
            if (tabContents[i]) {
                tabContents[i].style.display = 'grid';
            }
        });
    }
}

// 나 첫 화면 보여줭 
// 초기화 함수 정의 (또는 코드 하단에 바로 작성)
function initTab() {
    // 1. 모든 컨텐츠 숨기기
    tabContents.forEach(cont => cont.style.display = 'none');
    tabList.forEach(tab => tab.classList.remove('focus'));

    // 2. #tab1 (첫 번째 요소) 활성화
    const firstTab = tabList[0];
    const firstContent = tabContents[0];

    if (firstTab && firstContent) {
        firstTab.classList.add('focus');
        firstContent.style.display = 'grid';
        // 만약 position: absolute를 쓰신다면 여기서 width: 100%도 확인!
    }
}

initTab(); // 실행

accordion.forEach((title) => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const icon = title.querySelector('.icon-toggle');

        title.classList.toggle('active');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            content.style.maxHeight = content.scrollHeight + 10 + 'px';
            content.style.padding = '12px';  /* 원래 값 */
            icon.style.transform = 'rotate(180deg)';
        }
    });
});
var elements = document.getElementsByTagName('input');
for(var i = 0 ; i < elements.length ; i++ ) {
    elements[i].addEventListener('blur', function(evt) {
        if(evt.target.value.length > 0)
            evt.target.className += ' active';
        else
            evt.target.className = evt.target.className.replace(' active', '');
    })
    if(elements[i].name === 'pwd') {
        elements[i].addEventListener('change', function(evt) {
            if(evt.target.value.length < 8) {
                evt.target.className += ' alert';
                evt.target.nextElementSibling.innerHTML = '비밀번호는 8자 이상이어야 합니다.'
            }
            else {
                evt.target.className =  evt.target.className.replace(' alert','');
                evt.target.nextElementSibling.innerHTML = ''
            }
        })
    }
}
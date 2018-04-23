var elements = document.getElementsByTagName('input');

// 밸리데이션을 통과하면 true, 통과하지 못하면 false와 에러메시지를 반환
// 입력을 받아서 처리, 출력을 반환 -> 입력 / 출력 형태
// 입력은 DOM, 출력은 Object { result,  msg }
function validate(elem) {
    for(var i = 0 ; i < elem.attributes.length ; i++ ) {
        switch(elem.attributes[i].nodeName) {
            case 'regex':
                var re = new RegExp(elem.attributes[i].nodeValue);
                if(!re.test(elem.value))
                    return {result:false, msg:'형식이 맞지 않습니다.'}
                continue;
            case 'required':
                if(elem.value.length <= 0)
                    return {result : false, msg : '필수 입력 필드입니다.'};
                continue;
            case 'minlength':
                if(elem.value.length < Number(elem.attributes[i].nodeValue))
                    return {result : false, msg : elem.attributes[i].nodeValue+'자 이상 입력해주세요.'};
                continue;
            case 'maxlength':
                if(elem.value.length > Number(elem.attributes[i].nodeValue))
                    return {result : false, msg : elem.attributes[i].nodeValue+'자까지만 입력 가능합니다.'};
                continue;
            // case 'sameWith':
            //     return;
            default:
        }
    }
    return {result : true};
}
for(var i = 0 ; i < elements.length ; i++ ) {
    elements[i].addEventListener('blur', function(evt) {
        if(evt.target.value.length > 0)
            evt.target.className += ' active';
        else
            evt.target.className = evt.target.className.replace(' active', '');
        var is_valid = validate(evt.target);
        if(!is_valid.result) {
            evt.target.parentNode.children[1].innerHTML = is_valid.msg;
        }
        else {
            evt.target.parentNode.children[1].innerHTML = '';
        }
    })
}
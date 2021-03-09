
const rangetlr = document.getElementById('tlr'),
    rangetrr = document.getElementById('trr'),
    rangeblr = document.getElementById('blr'),
    rangebrr = document.getElementById('brr');

const resulttlr = document.getElementById('result-tlr'),
    resulttrr = document.getElementById('result-trr'),
    resultblr = document.getElementById('result-blr'),
    resultbrr = document.getElementById('result-brr');

const inputs = document.querySelectorAll('.input'),
      cube = document.getElementById('cube'),
      btn = document.getElementById('btn');
      totalResult = document.getElementById ('totalResult');

function changeRadius(){
    resulttlr.innerHTML = rangetlr.value;
    resulttrr.innerHTML = rangetrr.value;
    resultblr.innerHTML = rangeblr.value;
    resultbrr.innerHTML = rangebrr.value;

    cube.style.borderRadius = rangetlr.value + 'px ' + rangetrr.value + 'px ' + rangebrr.value + 'px ' + rangeblr.value + 'px';
}

for(input of inputs){
    input.addEventListener('input', changeRadius);
}

btn.addEventListener('click', function(){
    totalResult.innerHTML = rangetlr.value + 'px ' + rangetrr.value + 'px ' + rangebrr.value + 'px ' + rangeblr.value + 'px' + ';';
})

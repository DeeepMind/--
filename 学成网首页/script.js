var userName = location.search.substr(1)
var arr = userName.split('=')
var user = document.querySelector('.user').querySelector('span')
user.innerHTML = arr[1]
var search = document.querySelector('.search input')
search.onfocus = function () {
    search.value = ''
    search.style.color = '#333333'
}
search.onblur = function () {
    search.value = '请输入关键字'
    search.style.color = '#bfbfbf'
}
document.addEventListener('keyup', function (e) {
    if (e.key == 's' || e.key == 'S') {
        search.focus()
    }
})
var close = document.querySelector('.closeCourse')
var course = document.querySelector('.course')
close.onclick = function () {
    course.style.display = 'none'
}
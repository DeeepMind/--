window.addEventListener('load', function () {
    // 轮播图效果
    var pre = document.querySelector('.pre')
    var next = document.querySelector('.next')
    var banner = document.querySelector('.banner')
    banner.addEventListener('mouseenter', function () {
        pre.style.display = 'block'
        next.style.display = 'block'
        clearInterval(timer)
        timer = null
    })
    banner.addEventListener('mouseleave', function () {
        pre.style.display = 'none'
        next.style.display = 'none'
        timer = setInterval(function () {
            next.click()
        }, 4000
        )
    })
    var ul = banner.querySelector('ul')
    var ol = banner.querySelector('.circle')
    var bannerWidth = banner.offsetWidth
    window.onresize = function () {
        bannerWidth = banner.offsetWidth
    }
    var num = 0
    for (i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('index', i)
        ol.appendChild(li)
        ol.children[0].className = 'select'
        li.addEventListener('click', function () {
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            this.className = 'select'
            var index = this.getAttribute('index')
            animate(ul, -bannerWidth * index)//调用动画函数切换
            num = index
        })
    }
    //无缝切换
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    next.addEventListener('click', function () {
        num++
        if (num == ul.children.length) {
            num = 1
            ul.style.left = 0
            animate(ul, -bannerWidth * num)
        } else {
            animate(ul, -bannerWidth * num)
        }
        var k = num
        if (k == 6) {
            k = 0
        }
        for (i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[k].className = 'select'
    })
    pre.addEventListener('click', function () {
        num--
        if (num == -1) {
            num = ul.children.length - 2
        }
        animate(ul, -bannerWidth * num)
        var j = num
        for (i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[j].className = 'select'
    })
    var timer = setInterval(function () {
        next.click()
    }, 4000)
})
$(function () {
    //导航栏动画以及跳转功能
    $('.nav li').hover(function () {
        $('.nav .title').removeClass('title')
        $(this).addClass('title')
    })
    //商品展示页
    $('.canpin li').hover(function () {
        $('.active').removeClass('active')
        $(this).addClass('active')
    })
    // //用户表单
    // $('#user_data').submit(function (e) {
    //     e.preventDefault()//阻止表单的默认提交行为
    //     var user_data = $(this).serialize()
    //     $.ajax({ url: '', data: user_data })
    // })

})
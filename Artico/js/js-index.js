window.addEventListener('load', function () {
    var arr1 = [{
        num: 0,
        objName: '寒江独钓图',
        author: '马远',
        date: '宋代',
    }, {
        num: 3,
        objName: '富岳三十六景：神奈川冲浪里',
        author: '葛饰北斋',
        date: '1831',
    }
    ]
    var arr2 = [{
        num: 1,
        objName: '星月夜',
        author: '文森特·梵高 (Vincent Willem van Gogh)',
        date: '1889',
    }, {
        num: 2,
        objName: '戈黛娃夫人',
        author: '约翰·柯里尔 (John Collier)',
        date: '1897',
    }]
    var left = document.querySelector('.left')
    var center = document.querySelector('.center')
    var east = center.querySelector('.east')
    var west = center.querySelector('.west')
    var li = document.createElement('li')

    for (i = 0; i < arr1.length; i++) {
        var li = document.createElement('li')
        east.appendChild(li)
        li.innerHTML = '<a>《' + arr1[i].objName + '》' + arr1[i].author + arr1[i].date + '</a>'
        let link = li.querySelector('a')
        link.href = 'second.html?' + arr1[i].num
    }
    for (i = 0; i < arr2.length; i++) {
        var li = document.createElement('li')
        west.appendChild(li)
        li.innerHTML = '<a>《' + arr2[i].objName + '》' + arr2[i].author + arr2[i].date + '</a>'
        let link = li.querySelector('a')
        link.href = 'second.html?' + arr2[i].num
    }
    var ae = left.querySelector('.a_e')
    var aw = left.querySelector('.a_w')
    ae.addEventListener('click', function () {
        west.style.display = 'none'
        east.style.display = 'block'
    })
    aw.addEventListener('click', function () {
        east.style.display = 'none'
        west.style.display = 'block'
    })
})
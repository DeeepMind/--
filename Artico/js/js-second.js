window.addEventListener('load', function () {
    var arr = [{
        index: 0,
        objName: '寒江独钓图',
        author: '马远',
        date: '宋代',
        des: '《寒江独钓图》是宋代马远创作的一幅山水画。这幅画作者以严谨的铁线描，画一叶扁舟，上有一位老翁俯身垂钓，船旁以淡墨寥寥数笔勾出水纹，四周都是空白。画家画得很少，但画面并不空。反而令人觉得江水浩渺，寒气逼人。而且还觉得空白之处有一种语言难以表述的意趣，是空疏寂静，还是萧条淡泊，真令人思之不尽。这种诗—般耐人寻味的境界，是画家的心灵与自然结合的产物，在艺术上则是利用虚实结合而产生的结果。'
    }, {
        index: 1,
        objName: '星月夜',
        author: '文森特·梵高 (Vincent Willem van Gogh)',
        date: '1889',
        des: '在这幅画中，梵高用夸张的手法，生动地描绘了充满运动和变化的星空。整个画面被一股汹涌、动荡的蓝绿色激流所吞噬，旋转、躁动、卷曲的星云使夜空变得异常活跃，脱离现实的景象反映出梵·高躁动不安的情感和疯狂的幻觉世界。'
    }, {
        index: 5,
        objName: '戈黛娃夫人',
        author: '约翰·柯里尔 (John Collier)',
        date: '1897',
        des: '默认描述',
    }, {
        index: 2,
        objName: '富岳三十六景：神奈川冲浪里',
        author: '葛饰北斋',
        date: '1831',
        des: '默认描述',
    }]
    var num = parseInt(location.search.substr(1))
    var title = document.querySelector('title')
    var main = document.querySelector('.main')
    var img = main.querySelector('img')
    var h = main.querySelector('h2')
    var content = main.querySelector('p')
    title.innerText = arr[num].objName
    img.src = 'img/' + arr[num].index + '.jpg'
    h.innerText = arr[num].objName
    content.innerText = arr[num].des
})

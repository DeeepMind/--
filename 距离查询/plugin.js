AMap.plugin(['AMap.Geolocation', 'AMap.CitySearch', 'AMap.PlaceSearch', 'AMap.Driving'], function () {
    var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：5s
        buttonPosition: 'RB',    //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
    });
    var driving = new AMap.Driving({
        policy: AMap.DrivingPolicy.LEAST_TIME
    })
    var city = ''
    var cpoint = ''
    var list2 = {}
    map.addControl(geolocation);
    geolocation.getCurrentPosition(function (status, result) {
        if (status == 'complete') {
            var tab = document.querySelector('.tab').querySelectorAll('.title')
            for (i = 0; i < tab.length; i++) {
                tab[i].addEventListener("click", function () {
                    var tbody = document.querySelector('tbody')
                    tbody.innerHTML = ''
                    for (i = 0; i < tab.length; i++) {
                        tab[i].className = 'title'
                    }
                    this.classList.add('active')
                    var keyword = this.textContent
                    onComplete(result, keyword)
                });
            }
        } else {
            onError(result)
        }
    });
    function onComplete (data, keyword) {
        city = data.city
        cpoint = data.position;
        var placeSearch = new AMap.PlaceSearch({
            city: city, // 兴趣点城市
            map: map, // 展现结果的地图实例
            citylimit: true,
            pageSize: 20,
        });
        placeSearch.searchNearBy(keyword, cpoint, 50000, function (status, result) {
            if (status == 'complete') {
                distance2(result.poiList.pois)
                name(result.poiList.pois)
            } else {
                onError(result)
            }
        });
    }
    //距离计算
    // function distance (data) {
    //     var startLngLat = cpoint
    //     var distanceList = []
    //     for (var i = 0; i < data.length; i++) {
    //         var endLngLat = data[i].location
    //         driving.search(startLngLat, endLngLat, function (status, result) {
    //             // 未出错时，result即是对应的路线规划方案
    //             distanceList.push(result.routes[0].distance / 1000)
    //             i++
    //         })
    //     }

    // }
    async function distance2 (data) {
        var startLngLat = cpoint
        var distanceList = []
        for (var i = 0; i < data.length; i++) {
            var endLngLat = data[i].location
            await driving.search(startLngLat, endLngLat, async function (status, result) {
                // 未出错时，result即是对应的路线规划方案
                await distanceList.push(result.routes[0].distance / 1000)
                console.log(i);
            })
        }
        console.log(distanceList);
    }
    //显示搜索结果
    function name (data) {
        var nameList = []
        for (var i = 0; i < data.length; i++) {
            nameList.push(data[i].name)
        }
        console.log(nameList);
    }
    //数据转换
    function obj_arr (data) {
        var arr = []
        var keys = Object.keys(data)
        var len = data[keys[0]].length
        for (i = 0; i < len; i++) {
            var obj2 = {}
            for (x in data) {
                obj2[x] = data[x][i]
            }
            arr.push(obj2)
        }
        return arr
    }
    //制作表格
    function print (nameList, distanceList) {
        var distance = 'distance'
        var name = 'name'
        list2[name] = nameList
        list2[distance] = distanceList
        console.log(list2);
        list = obj_arr(list2)
        console.log(list);
        var tbody = document.querySelector('tbody')
        var tr = document.createElement('tr')
        var list = obj_arr(list2)
        for (var i = 0; i < list.length; i++) {
            var tr = document.createElement('tr')
            tbody.appendChild(tr)
            for (var k in list[i]) {
                var td = document.createElement('td')
                tr.appendChild(td)
                td.innerHTML = list[i][k]
            }
        }
    }


    function onError (data) {
        console.log(data);
    }

});
// function onComplete (data) {
//     console.log(data.roads);
// }
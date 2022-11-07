$(function () {
    $('.input_sub').on('click', function () {
        var text = $('.input_txt').val().trim()
        if (text.length <= 0) {
            return $('.input_txt').val('')//清除待发送的空格
        }
        //将聊天内容显示在对话框里
        $('.talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
        //提交内容到机器人接口
        $.get('http://www.liulongbin.top:3006/api/robot', { 'spoken': text }, function (res) {
            if (res.message === 'success') {
                var reply = res.data.info.text
                $('.talk_list').append('<li class="left_word"><img src="img/person01.png" /><span>' + reply + '</span></li>')
                getVoice(reply)
            }
        })
        resetui()
        return $('.input_txt').val('')
    })
    //获取语音
    function getVoice (text) {
        $.ajax({
            type: 'get',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                'text': text
            },
            success: function (res) {
                console.log(res);
                if (res.status === 200) {
                    $('#voice').attr('src', res.voiceUrl)
                }
            }
        })
    }
    //添加回车键发送
    $(window).keydown(function (e) {
        if (e.which == 13) {
            //$('.input_sub').trigger('click')
            $('.input_sub').click()
        }
    })
})
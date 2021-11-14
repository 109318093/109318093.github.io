const clineIdToken = 'k3x4eh46pxv5xdn81wjud6nboqle3m';
const clientSecretToken = 'epymqchl7uxxogxhpuwfylclv8rmj2';
const appAccessSecretToken = 'Bearer puomsk3h0x1euyixbubvn62k6z1c1u';
const twitchUrl = 'https://www.twitch.tv/'
// 遊戲ID 英雄聯盟
const gameId = '21779'
// 頻道語言中文 英文 == en
const language = 'zh'
const topGameSearchUrl = 'https://api.twitch.tv/helix/games/top'
// first 默認20 max:100
const channelSearchUrl = 'https://api.twitch.tv/helix/streams?first=20&game_id=' + gameId + '&language=' + language

/*
let xhr = new XMLHttpRequest();
xhr.open("GET", channelSearchUrl, true);
xhr.setRequestHeader('Client-ID', clineIdToken)
xhr.setRequestHeader('authorization', appAccessSecretToken)
xhr.send();

xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        console.log(data)
    }
}
*/

// 當網頁加載完成就運行
$(document).ready(getTwitchData(), setSwiper())

// 透過JQuery請求
function getTwitchData() {
    $.ajax({
        headers: {
            "Client-ID": clineIdToken,
            "authorization": appAccessSecretToken
        },
        url: channelSearchUrl,
        success: (response) => {
            console.log(response);
            setTwitchData(response);        
        }
    })
};

// 設定每個拿到的data
function setTwitchData(data) {
    const streams = data.data;    
    const row = $('.row');
    for(let i = 0; i<streams.length; i++) {
        row.append(getColumn(streams[i]));
        setStreamerUrl(streams[i], i)
        setSwiperContainer(streams[i], i)        
    }
}
/*
setTwitchData((err, data) => {
    const streams = data;
    const $row = $('.row');
    console.log(streams)
    for(let i = 0; i<streams.length; i++) {
        $row.append(getColumn(streams[i]));
    }
});
*/

function setStreamerUrl(data, i) {
    document.getElementsByClassName('stream_url')[i].href = twitchUrl + data.user_login
}

//return 每一個col的 html 
function getColumn(data) {
    // .replace(str, str)第一個是要被替換的字第二個是替換後的字
    return `
        <div class='col'>
            <div class='preview'>
                <a class='stream_url' href="" target=”_blank” rel="noreferrer noopenner">
                    <img class='img' src="${data.thumbnail_url.replace('{width}x{height}', '298x170')}">
                </a>                
            </div>
            <div class='buttom'>
                <div class='avatar'>
                    <img src="../image/dolaamong.png">
                </div>
                <div class='intro'>
                    <div class='channel_name'>${data.user_login}</div>
                    <div class='owner_name'>${data.user_name}</div>
                </div>
            </div>                
        </div>`;
};

// 設定幻燈片內容
function setSwiperContainer(data, i) {    
    const photoSize = '1024x500'
    switch (i) {
        case 0:
            document.getElementsByClassName('stream_photo1')[0].src = data.thumbnail_url.replace('{width}x{height}', photoSize);
            document.getElementsByClassName('channel_name1')[0].innerHTML = data.user_login
            document.getElementsByClassName('owner_name1')[0].innerHTML = data.user_name
            document.getElementsByClassName('viewer_count1')[0].innerHTML = "觀眾人數:" + data.viewer_count
            document.getElementsByClassName('channel_title1')[0].innerHTML = data.title
            document.getElementsByClassName('stream_url1')[0].href = twitchUrl + data.user_login           
            break;
        case 1:
            document.getElementsByClassName('stream_photo2')[0].src = data.thumbnail_url.replace('{width}x{height}', photoSize);
            document.getElementsByClassName('channel_name2')[0].innerHTML = data.user_login
            document.getElementsByClassName('owner_name2')[0].innerHTML = data.user_name
            document.getElementsByClassName('viewer_count2')[0].innerHTML = "觀眾人數:" + data.viewer_count
            document.getElementsByClassName('channel_title2')[0].innerHTML = data.title
            document.getElementsByClassName('stream_url2')[0].href = twitchUrl + data.user_login   
            break;
        case 2:
            document.getElementsByClassName('stream_photo3')[0].src = data.thumbnail_url.replace('{width}x{height}', photoSize);
            document.getElementsByClassName('channel_name3')[0].innerHTML = data.user_login
            document.getElementsByClassName('owner_name3')[0].innerHTML = data.user_name
            document.getElementsByClassName('viewer_count3')[0].innerHTML = "觀眾人數:" + data.viewer_count
            document.getElementsByClassName('channel_title3')[0].innerHTML = data.title
            document.getElementsByClassName('stream_url3')[0].href = twitchUrl + data.user_login   
            break;
        case 3:
            document.getElementsByClassName('stream_photo4')[0].src = data.thumbnail_url.replace('{width}x{height}', photoSize);
            document.getElementsByClassName('channel_name4')[0].innerHTML = data.user_login
            document.getElementsByClassName('owner_name4')[0].innerHTML = data.user_name
            document.getElementsByClassName('viewer_count4')[0].innerHTML = "觀眾人數:" + data.viewer_count
            document.getElementsByClassName('channel_title4')[0].innerHTML = data.title
            document.getElementsByClassName('stream_url4')[0].href = twitchUrl + data.user_login   
            break;
        case 4:
            document.getElementsByClassName('stream_photo5')[0].src = data.thumbnail_url.replace('{width}x{height}', photoSize);
            document.getElementsByClassName('channel_name5')[0].innerHTML = data.user_login
            document.getElementsByClassName('owner_name5')[0].innerHTML = data.user_name
            document.getElementsByClassName('viewer_count5')[0].innerHTML = "觀眾人數:" + data.viewer_count
            document.getElementsByClassName('channel_title5')[0].innerHTML = data.title
            document.getElementsByClassName('stream_url5')[0].href = twitchUrl + data.user_login   
            break;
        case 5:
            document.getElementsByClassName('stream_photo6')[0].src = data.thumbnail_url.replace('{width}x{height}', photoSize);
            document.getElementsByClassName('channel_name6')[0].innerHTML = data.user_login
            document.getElementsByClassName('owner_name6')[0].innerHTML = data.user_name
            document.getElementsByClassName('viewer_count6')[0].innerHTML = "觀眾人數:" + data.viewer_count
            document.getElementsByClassName('channel_title6')[0].innerHTML = data.title
            document.getElementsByClassName('stream_url6')[0].href = twitchUrl + data.user_login   
            break;
        case 6:
            document.getElementsByClassName('stream_photo7')[0].src = data.thumbnail_url.replace('{width}x{height}', photoSize);
            document.getElementsByClassName('channel_name7')[0].innerHTML = data.user_login
            document.getElementsByClassName('owner_name7')[0].innerHTML = data.user_name
            document.getElementsByClassName('viewer_count7')[0].innerHTML = "觀眾人數:" + data.viewer_count
            document.getElementsByClassName('channel_title7')[0].innerHTML = data.title
            document.getElementsByClassName('stream_url7')[0].href = twitchUrl + data.user_login   
            break;
        case 7:
            document.getElementsByClassName('stream_photo8')[0].src = data.thumbnail_url.replace('{width}x{height}', photoSize);
            document.getElementsByClassName('channel_name8')[0].innerHTML = data.user_login
            document.getElementsByClassName('owner_name8')[0].innerHTML = data.user_name
            document.getElementsByClassName('viewer_count8')[0].innerHTML = "觀眾人數:" + data.viewer_count
            document.getElementsByClassName('channel_title8')[0].innerHTML = data.title
            document.getElementsByClassName('stream_url8')[0].href = twitchUrl + data.user_login   
            break;
        case 8:
            document.getElementsByClassName('stream_photo9')[0].src = data.thumbnail_url.replace('{width}x{height}', photoSize);
            document.getElementsByClassName('channel_name9')[0].innerHTML = data.user_login
            document.getElementsByClassName('owner_name9')[0].innerHTML = data.user_name
            document.getElementsByClassName('viewer_count9')[0].innerHTML = "觀眾人數:" + data.viewer_count
            document.getElementsByClassName('channel_title9')[0].innerHTML = data.title
            document.getElementsByClassName('stream_url9')[0].href = twitchUrl + data.user_login   
            break;
        case 9:
            document.getElementsByClassName('stream_photo10')[0].src = data.thumbnail_url.replace('{width}x{height}', photoSize);
            document.getElementsByClassName('channel_name10')[0].innerHTML = data.user_login
            document.getElementsByClassName('owner_name10')[0].innerHTML = data.user_name
            document.getElementsByClassName('viewer_count10')[0].innerHTML = "觀眾人數:" + data.viewer_count
            document.getElementsByClassName('channel_title10')[0].innerHTML = data.title
            document.getElementsByClassName('stream_url10')[0].href = twitchUrl + data.user_login   
            break;        
    }
}

// 幻燈片跑馬燈套件
function setSwiper() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters

        // 播放方式為 覆蓋流
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: true
        },
        // 垂直切换选项
        //direction: 'vertical', 

        loop: false, // 循环模式选项
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            // 分頁符號動態
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        /* And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        */
    });
}
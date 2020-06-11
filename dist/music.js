const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    data-mode: 'circulation',
    audio: [
      {
        name: "那些年",
        artist: '胡夏',
        url: 'http://yuesuixiang.com/plug/jiexi/qq.php/4830481.m4a',
      }
    ]
});
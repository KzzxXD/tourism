(function () {
    let time = 500
    setInterval(function () {
        $('#button-header').animate({"top":"10px"});
        $('#button-header').animate({"top":"0px"});
    },time);
})();
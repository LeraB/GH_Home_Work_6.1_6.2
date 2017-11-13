function debounce (callback, time) {
    var timer

    return function () {
        var args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            callback(args[0])
        }, time)
    }
}

document
    .querySelector('input[type="search"]')
    .addEventListener('input', debounce(function (event) {
        console.log(event.target.value)
          }, 250), false)
document.querySelector('input[type="search"]').addEventListener('input', value(function (event) {
    document.getElementById("head").appendChild(document.createTextNode(event.target.value));
        }, 250), false)



function value() {
    var count =  "You really searched for : " + arguments;
    return (function (count) {
        console.log(count)
    })()
}
value();
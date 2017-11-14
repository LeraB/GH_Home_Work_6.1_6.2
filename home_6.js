function client(name, status, second_name){
    var userName = name || 'Anonym' ;
    var userStatus = status || 'usual';
    var SecondName = second_name || 'Anonym' ;
    this.Name = function () {
        console.log(userName)
    }

    this.SecondName = function () {
        console.log(userName)
    }

    this.Status = function () {
        console.log(userStatus)
    }

    return{ allData: function (name, status, second_name) {
        console.log('user data : ' + SecondName  + userName + userStatus )
    }}
}



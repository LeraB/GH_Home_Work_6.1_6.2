function client(name, second_name, status){
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

  return  function (){
        console.log('user data : ' + '\n'+ 'Second name : '+ SecondName  + '\n'+ 'Name : ' + userName  + '\n'+ 'Status : ' + userStatus )
    }
}

var client1= new client('Lera', 'Briantseva', 'usual')
var client2= new client('Marina', 'Bakum', 'usual')


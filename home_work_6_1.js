function Client(name, secondName, status) {
    var userName = 'Name : ' + (name || 'Anonym');
    var userStatus = 'Second name : ' + (status || 'usual');
    var userSecondName = 'Status : ' + (secondName || 'Anonym');
    var count = 0;
    var  all_data = '';



    function newName (name) {
        if((name !== '') && (name)){
        userName = 'Name : ' + name;}
    return userName;
    };


   function funcNewSecondName (secondName) {
       if((secondName !== '') && (secondName)){
        userSecondName = 'Second name : ' + secondName;}
   return  userSecondName;
   };

    (function () {
        return console.log('Visits : ' + count++);
    })()


  function funcNewStatus (status) {
      if((status !== '') && (status)){
        userStatus = 'Status : ' + status;}
        return userStatus
    };

        return {
       funcName: function (name) {
           return console.log(newName(name));
    },
    funcStatus: function (status) {
        return console.log(funcNewStatus(status));
    },
    funcSecondName: function (secondName) {
        return console.log(funcNewSecondName(secondName));
    },
    funcAll: funcAllData = function () {
        allData = 'user data : \n' + userSecondName + '\n' + userName + '\n' + userStatus + '\nVisits : ' + ++count;
        console.log(allData)
    }
    }
}

var client1 = new Client('Lera', 'Briantseva', 'usual');
client1.funcAll();
client1.funcName();
client1.funcName('Kate');
client1.funcName('');
var client2 = new Client('Marina', 'Bakum', 'usual');
client1.funcSecondName('');
client1.funcName('Inna');
client1.funcName();
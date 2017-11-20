function Client(name, second_name, status) {
    var userName = name || 'Anonym';
    var userStatus = status || 'usual';
    var secondName = second_name || 'Anonym';
    var count = 0;
    var  all_data = '';

    this.name = function () {
        return console.log(userName)
    };


    this.new_name = function (name) {
        userName = 'Name : ' + name;
    };

    this.second_name = function () {
        return console.log(secondName)
    };
   this.new_second_name = function () {
        secondName = 'Second name : ' + second_name;
    };

    this.count = function () {
        return console.log('Visits : ' + count++);
    };
    this.status = function () {
        return console.log(userStatus);
    };

    this.new_status = function () {
        userStatus = 'Status : ' + status;
    };

    this.f_all_data = function () {
        all_data = 'user data : \nSecond name : ' + secondName + '\nName : ' + userName + '\nStatus : ' + userStatus + '\nVisits : ' + ++count;
        console.log(all_data)
    };

    return this
}

var client1 = new Client('Lera', 'Briantseva', 'usual');
client1.name();
client1.status();
client1.new_name('Kate');
client1.name();

var client2 = new Client('Marina', 'Bakum', 'usual');
client2.name();
client2.status();
client1.f_all_data();
client2.f_all_data();
client2.count()
app.controller('GreetingController', function(){
  var vm = this;

  vm.currentTitle;
  vm.title = ['Web Developer', 'Full-Stack Developer'];
  vm.setTitle = function() {
    // setInterval(currentTitle=[])
  }
  // var api = "https://api.shutterstock.com/v2/images/search?query=donkey&page=1&limit=1"

  // this.apiCall = function() {
  //   $http.get({
  //     method: 'GET',
  //     url: api,
  //     headers: {
  //       'Authorization' : 'Basic NDRmYWQ3NTRjOTE3MTk4ZmE4ZGY6ODZkYjhjNTliZTQ4MTU3NzNiNjZkMjhjZmZiYjI2YWZmZTA3NThhYQ=='
  //     }
  //   }).then(function(res) {
  //     console.log(res);
  //   }).catch(function(err) {
  //     console.log(err);
  //   })
  // }

  return vm;
})

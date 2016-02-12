app.controller('GreetingController', function($interval){
  var vm = this;

  vm.currentTitle = 'Full-Stack Developer';
  vm.title = ['Web Developer', 'Design-Enthusiast', 'Full-Stack Developer'];
  $interval(function(){
        if (vm.currentTitle == vm.title[0]) {
          vm.currentTitle = vm.title[1];
        } else if (vm.currentTitle == vm.title[1]) {
          vm.currentTitle = vm.title[2];
        } else {
          vm.currentTitle = vm.title[0];
        }
  }, 3000)

  return vm;
})

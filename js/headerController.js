app.controller('HeaderController', function(){
  // this.icon = {
  //               dormant: "fa fa-circle-o",
  //               active: "fa fa-circle"
  //             };
  var vm = this;
  vm.menu = {
                portfolio: {
                  name: 'portfolio',
                  div: '#portfolio-section',
                  active: false
                },
                about: {
                  name: 'about',
                  div: '#about-section',
                  active: false
                },
                contact: {
                  name: 'contact',
                  div: '#contact-section',
                  active: false
                }
              }
  return vm;
})

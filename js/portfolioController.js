app.controller('PortfolioController', function(){
  var vm = this;
  vm.currentProject = {};
  vm.setPjt = function(project) {
    vm.currentProject = project;
  }

  vm.projects = { bbq:
                  { name: 'Bar-BQ',
                    description: "Bar-BQ is a JavaScript based click, drag, and drop game simulating a BBQ setting. Clear orders and don't let your food burn!",
                    skills: ['JavaScript','JQuery', 'JQueryUI', 'HTML', 'CSS'],
                    url: 'http://labaikie.github.io/bar-bq/',
                    git: 'https://github.com/labaikie/bar-bq',
                    imgUrl:'../images/bar-bq.png',
                    ss: '../images/bbq_screen_1.png'
                  },
                  petssup:
                  { name: 'PetssUp',
                    description: 'PetssUp is social network for pets, by pets, built with Ruby on Rails. Let your pet interact with other pets with sound!',
                    skills: ['Ruby', 'Rails', 'PostgreSQL', 'JQuery', 'API', 'HTTParty', 'SASS', 'Bootstrap', 'HTML', 'CSS'],
                    url: 'https://petssup.herokuapp.com/',
                    git: 'https://github.com/labaikie/petssup',
                    imgUrl:'../images/petssup.png',
                    ss:'../images/petssup_screen_1.png'
                  },
                  ventureus:
                  { name: 'VentureUs',
                    description: "VentureUs is a full-stack app set out to solve the problem of group indecisiveness. It's powered by the Foursquare, Google Maps API, and the Facebook OAuth.",
                    skills: ['NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'AJAX', 'Promise', 'Socket.io', 'OAuth', 'bcrypt', 'JQuery'],
                    url: 'https://project-venture-us.herokuapp.com/',
                    git: 'https://github.com/kwakiekwak/venture_us',
                    imgUrl:'../images/venture-us.png',
                    ss:'../images/ventureus_screen_1.png'
                  },
                  project4:
                  { name: 'Project 4',
                    description: 'To be announced ...',
                    skills: ['IONIC', 'AngularJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'JavaScript', 'JQuery'],
                    url: '',
                    imgUrl:'../images/venture-us.png',
                    ss:'../images/ventureus_screen_1.png'
                  }
                  // bikeLA:
                  // { name: 'BikeLA',
                  //   description: '',
                  //   skills: []
                  //   url: ''
                  // }
                }

  return vm;
})

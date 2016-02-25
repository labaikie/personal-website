app.controller('CanvasController', function(){
  var vm = this;

  vm.load = function() {
    // Set up scene - entire screen
    var scene = new THREE.Scene();

    // Set up camera - different types of cameras; args: 75 FOV, aspect ratio of width/height, near plain to see an object, far plain
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    // appends canvas to html
    document.body.appendChild( renderer.domElement );

    // Zoom the camera out so we can see the cube; set z position to 5
    // Camera is pointing directly in the center; need to add a rotation to the camera
    // camera.position.set(1, 3, 5,) x y z
    camera.position.z = 20;

    //   var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    //   var material = new THREE.MeshNormalMaterial(  );
    //   var sphere = new THREE.Mesh( geometry, material );

    // create the particle variables
    var particleCount = 500,
      particles = new THREE.Geometry(),
      // only colors in vertices
      pMaterial = new THREE.PointsMaterial({
        vertexColors: THREE.VertexColors,
        size: 5
      });

    // now create the individual particles
    for (var p = 0; p < particleCount; p++) {

      // create a particle with random
      // position values, -250 -> 250
      var pX = Math.random() * 500 - 250,
          pY = Math.random() * 500 - 250,
          pZ = Math.random() * 500 - 250,
          particle = new THREE.Vector3(pX, pY, pZ);

      // add it to the geometry
      particles.vertices.push(particle)
      particles.colors.push(new THREE.Color(Math.random(), Math.random(), Math.random()))
    }

    // create the particle system
    var particleSystem = new THREE.Points( particles, pMaterial);

    // add it to the scene
    scene.add(particleSystem);

    // Add interactivity based on mouse movement
    $(document).mousemove(function(event) {
      // get mouse position on the screen and normalize
      var y = (event.pageX / window.innerWidth) - 0.5;
      var x = (event.pageY / window.innerHeight) - 0.5;

      // move camera by radians
      var scalingFactor = 2

      camera.rotation.y = y * scalingFactor;
      camera.rotation.x = x * scalingFactor;
    });

    // The render loop 60 frames per second
    function render() {
        requestAnimationFrame( render );

        // Any updates to scene, camera, or objects go here
        // That is, this is where the animation happens!

        // NEED TO APPLY SETTINGS SO THAT WHEN YOU RESIZE THE BROWSER THE CANVAS ALSO REFRESHES
        // camera.rotation.y += 0.0125
        // camera.rotation.x += 0.0125

        // Add this to watch your particles swirl!
        particleSystem.rotation.y += .001;

        renderer.render( scene, camera );
    }
    render();


  }

  return vm;
})

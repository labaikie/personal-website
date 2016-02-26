app.controller('CanvasController', function(){
  var vm = this;

  vm.load = function() {
    var mouseX = 0, mouseY = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    // Set up camera
    var camera      = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set = (100000, 0, 3200); //  x y z
    var scene       = new THREE.Scene();

    // create mesh variables
    var geometry      = new THREE.Geometry(),
        geometryCount = 800,
        colors = [ 0xC6C9CE, 0x465967, 0x75989E, 0x94B6B8 ],
        material = new THREE.PointsMaterial({
          size: 1.3,
          vertexColors: THREE.VertexColors,
          depthTest: false,
          opacity: 0.3,
          sizeAttenuation: false,
          transparent: true
        });

    // create # of geometry
    for (var i = 0; i < geometryCount; i++) {
      var vertex = new THREE.Vector3();
        vertex.x = Math.random() * 4000 - 2000;
        vertex.y = Math.random() * 4000 - 2000;
        vertex.z = Math.random() * 4000 - 2000;
      geometry.vertices.push(vertex);
      geometry.colors.push(new THREE.Color(colors[Math.floor(Math.random() * colors.length)]));
    }

    var mesh = new THREE.Points(geometry, material);

    // add them to the scene
    scene.add(mesh);

    // define renderer and set canvas to html
    var renderer = new THREE.WebGLRenderer({
                    alpha: true,
                    preserveDrawingBuffer: true
                  });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.sortObjects = false;
    renderer.autoClearColor = false;
    document.body.appendChild( renderer.domElement );

    // Add interactivity
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'touchmove', onDocumentMouseMove, false );
    $(document).on('vmousemove', function(event) {
      mouseX = ( event.clientX - windowHalfX ) * 10;
      mouseY = ( event.clientY - windowHalfY ) * 10;
    });

    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove(event) {
      mouseX = ( event.clientX - windowHalfX ) * 10;
      mouseY = ( event.clientY - windowHalfY ) * 10;
    }

    function animate() {
      requestAnimationFrame( animate );

      render();
      stats.update();
    }

    function render() {
        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY - camera.position.y ) * .05;

        camera.lookAt( scene.position );

        renderer.render( scene, camera );
    }
    animate();
  }

  return vm;
})

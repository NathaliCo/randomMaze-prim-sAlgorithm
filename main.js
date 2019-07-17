
//Function for start the maze
const initMaze = {
    // Dimension of the Maze
        width: 25,
        heigth: 25,
    init : function(){
        // Scene is the root of a form of scene graph
        let scene = new THREE.Scene();
        //field of view=70 (vertical dimension) aspect=1(is the display aspect of the canvas), near=0.1, far=500 (the space in front of the camera)
        let camera = new THREE.PerspectiveCamera( 70, 1 , 0.1, 500 );
//Take all the data and render it 
        let renderer = new THREE.WebGLRenderer();
        //The size of the Maze
        renderer.setSize( window.innerWidth, window.innerHeight );
        //Add a canva into div scene
        let renderSpace =  document.querySelector("#scene");
        let canvas = renderer.domElement;
        renderSpace.appendChild( canvas );
//Calling the RandomMaze class and initMaze object with the properties width and heigth inside like a parameters
        maze = new RandomMaze([initMaze.width,initMaze.heigth],[-(initMaze.width / 2),-(initMaze.heigth/2)]);
        labery.draw(scene);
        camera.position.z = 30;

        let animate = function () {
            //request to the browser for animate something
            requestAnimationFrame( animate );
//show the graph in screen
            renderer.render( scene, camera );
        };

        animate();
    },
};

window.addEventListener("load",initMaze.init);


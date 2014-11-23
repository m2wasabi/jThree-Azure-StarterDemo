jThree( function( j3 ) {

	$( "#loading" ).remove();

	j3.Trackball();
	j3.Stats();
	jThree.MMD.play();
//	var fly = jThree.FlyView();
//	fly.start();

	$("#music").get(0).play();


},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );

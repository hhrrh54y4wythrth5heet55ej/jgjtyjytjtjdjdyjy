
var pjs  = new PointJS(1880 , 910 , {backgroundColor : 'red'})  
var game = pjs.game;
 var rect = game.newRectObject(   { 
   x : 100, 
   y : 100, 
   w : 50, 
   h : 50, 
   fillColor : "#FBFE6F" ,
   strokeWidth: 6
 });
 var fps = pjs.system.getFPS();
 game.newLoop('mgdgd' , function() 
 {
   rect.draw();
 })
 game.setLoop('mgdgd');
 game.start();
 setInterval(
    console.log(fps),
    3000
  );

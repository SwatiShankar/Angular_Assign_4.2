/// <reference path = "IShp.ts" />   
         /// <reference path = "Cir.ts" /> 
         /// <reference path = "Tri.ts" />  
         function drawAllShapes(shape:Drawing.IShape) { 
            shape.draw(); 
         } 
         drawAllShapes(new Drawing.Circle());
         drawAllShapes(new Drawing.Triangle());
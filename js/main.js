function toggleClickVisibility() {
    if (shapeContainer.style.display != 'none') 
    { 
        shapeContainer.classList.add('hiddenClass');
     setTimeout('shapeContainer.style.display=\'none\'', 1000); 
   } 
     else 
     {shapeContainer.style.display='flex';
      setTimeout('shapeContainer.classList.remove(\'hiddenClass\')', 10);
   }
 }






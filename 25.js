/*функция*/
function drawChess() {
  let mainblock = document.querySelector('.main-block');
  let block;
  let flag = true;

  /*вроде це будет цикл теперь то что фор да да я запомнил что начинается с нуля евгений(великий человек если что) по горезонтали*/
  for (let i = 0; i < 8; i++) {
   
    for (let j = 0; j < 8; j++) {
    	
    	if (j==0) flag = !flag;
      
      block = document.createElement('div');
     
      if (flag) block.className = 'block black';
     
       else block.className = 'block white';
     
      mainblock.appendChild(block);
      flag = !flag;
      /*да да целых две цикла */
    }
  }
}
drawChess();
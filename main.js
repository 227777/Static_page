window.addEventListener('load',function(){
	var cart =document.querySelector('#cart');
	function changecolor(){
		cart.addEventListener('mouseover',function(){
			cart.style.color='orange';
			cart.style.backgroundColor='white';	
			cart.addEventListener('mouseleave',function()
			{
				cart.style.color='#9E9E9E';
				cart.style.backgroundColor='#333333';
			})
		})
		var triangle=document.querySelector('.triangle');
		triangle.style.p
	}
	/*函数执行*/
	changecolor();
	
})
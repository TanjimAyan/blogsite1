const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');

var sidebar_width = sidebar.clientWidth;

sidebar.style.left = '-' + sidebar_width + 'px';
sidebar.style.visibility = 'visible';

window.addEventListener('resize',function(){
	var sidebar_width = sidebar.clientWidth;
	sidebar.style.left = '-' + sidebar_width + 'px';
	sidebar.style.visibility = 'visible';
});
		

toggle.onclick = function(){
	toggle.classList.toggle('active');
	sidebar.classList.toggle('sidebar-active');
}

document.onclick = function(e){

	// if(e.target.id == 'sidebar-link'){
	// 	sidebar.style.left = '-' + sidebar_width + 'px';
	// }

	if(e.target.id !== 'sidebar' && e.target.id !== 'toggle'){
		toggle.classList.remove('active');
		sidebar.classList.remove('sidebar-active');
	}


}
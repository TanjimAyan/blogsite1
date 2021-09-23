$(document).ready(function(){

	var url_string = window.location.href;
	var url = new URL(url_string);
	var cate = url.searchParams.get("cate");
	var title = url.searchParams.get("title");
	var img = url.searchParams.get("img");

	var get_cate = $('.pvOne .col .wrapper .cat-name');

	var get_title = $('.pvOne .col .wrapper .post-title a');

	var get_img = $('.pvOne .col img:first-child');

	get_cate.text(cate);

	get_title.text(title);

	get_img.attr('src','images/'+img);

});
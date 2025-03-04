$(document).ready(function(){
   
    //상단메뉴 배경색 조절
	//휴대폰에서는 배경색 보임
	if($(window).width() <= 600 ){
		$("nav").addClass('act');
	}
	else {
		const change = $("#top").height()-100;
		$(window).scroll(function(){
			if( $(window).scrollTop() >= change ){
				$("nav").addClass('act');
			} else {
				$("nav").removeClass('act');
			}
		});
	}    

	//타자치는 효과
	const $typing = "모든 사람은 열정이 있다. 다만 실천을 하지 않을뿐...!!";
	//console.log( $typing[7]  );
	const tyLen  = $typing.length;
	console.log( tyLen ); //21개
	let i = 0;
	let txt = "";

	function type(){
		if( i < tyLen ){
			txt += $typing[i];
			//$("#typing").html(  txt );
			document.querySelector("#typing").innerText = txt;
			i++;
			setTimeout( type, 200);
		}
	}
	type();	
});
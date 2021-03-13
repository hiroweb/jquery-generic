/* 閏年判定 */
function isLeapYear(y) {
	return !(y % 4) && (y % 100) || !(y % 400) ? true : false;
}

/* 数字＆桁数チェック */
function numericCheck(num,len) {
	if (num == parseInt(num)){
		if (num.length == len) {
    		return true;
		}else{
			return false;
		}
	}else{
    	return false;
	}
}

/* 区切り文字で分割 */
function string2array(OBJname,delimiter) {
	var str = $('#' + OBJname).val().split(delimiter);
	$.each(str, function(i, v) {
		$('.' + OBJname).eq(i).val(v);
	});
}

/* 区切り文字で連結 */
function array2string(OBJname,delimiter) {
	var check = new Array();
	$.each($('.' + OBJname), function(i, v) {
		if ($(this).prop('type') == 'checkbox') {
			if ($(this).prop('checked')) {
				check[i] = $(this).val();
			}else{
				check[i] = '';
			}
		}else{
			if ($(this).val()) {
				check[i] = $(this).val();
			}
		}
	});
	if (check.length) {
		$('#' + OBJname).val(check.join(delimiter));
	}else{
		$('#' + OBJname).val('');
	}
}


/* 背景色に対して文字色を自動判定 */

function blackOrWhite ( hexcolor ) {
	var r = parseInt( hexcolor.substr( 1, 2 ), 16 ) ;
	var g = parseInt( hexcolor.substr( 3, 2 ), 16 ) ;
	var b = parseInt( hexcolor.substr( 5, 2 ), 16 ) ;

	return ( ( ( (r * 299) + (g * 587) + (b * 114) ) / 1000 ) < 128 ) ? "#ffffff" : "#000000" ;
}

/* rgb(255,255,255) → #fffffff 変換*/
function convert16Color(color){
		color = color.replace("rgb(","");
        color = color.replace(")","");
        //文字列分割
        color = color.split(",");
        //10進数を16進数に変換して連結
        color = "#"+parseInt(color[0]).toString(16)+parseInt(color[1]).toString(16)+parseInt(color[2]).toString(16);
		return color;
}

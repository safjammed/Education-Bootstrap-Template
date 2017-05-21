jQuery(document).ready(function($) {
//FUNCTIONS
	 if (!Application) var Application = {};
                    if (!Application.Page) Application.Page = {};
                    if (!Application.Page.ClientCAPTCHA) {
                        Application.Page.ClientCAPTCHA = {
                            sessionIDString: '',
                            captchaURL: [],
                            getRandomLetter: function () { return String.fromCharCode(Application.Page.ClientCAPTCHA.getRandom(65,90)); },
                            getRandom: function(lowerBound, upperBound) { return Math.floor((upperBound - lowerBound + 1) * Math.random() + lowerBound); },
                            getSID: function() {
                                if (Application.Page.ClientCAPTCHA.sessionIDString.length <= 0) {
                                    var tempSessionIDString = '';
                                    for (var i = 0; i < 32; ++i) tempSessionIDString += Application.Page.ClientCAPTCHA.getRandomLetter();
                                    Application.Page.ClientCAPTCHA.sessionIDString.length = tempSessionIDString;
                                }
                                return Application.Page.ClientCAPTCHA.sessionIDString;
                            },
                            getURL: function() {
                                if (Application.Page.ClientCAPTCHA.captchaURL.length <= 0) {
                                    var tempURL = 'http://opportunitysurvey.com/admin/resources/form_designs/captcha/index.php?c=';
                                    
                                                            tempURL += Application.Page.ClientCAPTCHA.getRandom(1,1000);
                                                                    tempURL += '&ss=' + Application.Page.ClientCAPTCHA.getSID();
                                                                Application.Page.ClientCAPTCHA.captchaURL.push(tempURL);
                                                    }
                                return Application.Page.ClientCAPTCHA.captchaURL;
                            }
                        }
            }


	function CheckMultiple1(frm, name) {
				for (var i=0; i < frm.length; i++)
				{
					fldObj = frm.elements[i];
					fldId = fldObj.id;
					if (fldId) {
						var fieldnamecheck=fldObj.id.indexOf(name);
						if (fieldnamecheck != -1) {
							if (fldObj.checked) {
								return true;
							}
						}
					}
				}
				return false;
			}
		function CheckForm1(f) {
			var email_re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
			if (!email_re.test(f.email.value)) {
				alert("Please enter your email address.");
				f.email.focus();
				return false;
			}
		
						if (f.format.selectedIndex == -1) {
							alert("Please choose a format to receive your email campaigns in");
							f.format.focus();
							return false;
						}
					
				if (f.captcha.value == "") {
					alert("Please enter the security code shown");
					f.captcha.focus();
					return false;
				}
			
			var fname = "CustomFields_18_1";
			var fld = document.getElementById(fname);
			if (fld.value == "") {
				alert("Please enter a value for field Have you ever considered to studying in the US or Canada?");
				fld.focus();
				return false;
			}
		
			var fname = "CustomFields_19_1";
			var fld = document.getElementById(fname);
			if (fld.value == "") {
				alert("Please enter a value for field If you have an opportunity to study in abroad, will you take it?");
				fld.focus();
				return false;
			}
		
			var fname = "CustomFields_20_1";
			var fld = document.getElementById(fname);
			if (fld.value == "") {
				alert("Please enter a value for field Can you tell us your How old are you?");
				fld.focus();
				return false;
			}
		
			var fname = "CustomFields_21_1";
			var fld = document.getElementById(fname);
			if (fld.value == "") {
				alert("Please enter a value for field Can you tell us how much funds you have for your studying and living expenses ?");
				fld.focus();
				return false;
			}
		
			var fname = "CustomFields_22_1";
			var fld = document.getElementById(fname);
			if (fld.value == "") {
				alert("Please enter a value for field Do you want to apply for A");
				fld.focus();
				return false;
			}
		
			var fname = "CustomFields_17_1";
			var fld = document.getElementById(fname);
			if (fld.value == "") {
				alert("Please enter a value for field Can you tell us what files of studies are you interested in?");
				fld.focus();
				return false;
			}
		
			var fname = "CustomFields_23_1";
			var fld = document.getElementById(fname);
			if (fld.value == "") {
				alert("Please enter a value for field Education");
				fld.focus();
				return false;
			}
		
			var fname = "CustomFields_24_1";
			var fld = document.getElementById(fname);
			if (fld.value == "") {
				alert("Please enter a value for field Marital Status");
				fld.focus();
				return false;
			}
		
			var fname = "CustomFields_25_1";
			var fld = document.getElementById(fname);
			if (fld.value == "") {
				alert("Please enter a value for field How Did You Find Us?");
				fld.focus();
				return false;
			}
		
				return true;
			}


	function openFirstPage(){
            $('.secondPage, .thirdPage').slideUp('fast', function(){
                $('.firstPage').slideDown('slow');
                console.log("back to first page");
            });
    }
    function openSecondPage(){
        $('.firstPage, .thirdPage').slideUp('fast',function(){            
        $('.secondPage').slideDown('slow');
        // console.log("Second page opened");
        });
    }
    function openThirdPage(){
        $(".firstPage, .secondPage").slideUp('fast', function() {
                $(".thirdPage").slideDown('slow');
                // console.log("third page opened");
            });
    } 
    var refreshCapcha = function(){
    	var temp = Application.Page.ClientCAPTCHA.getURL();
        for (var i = 0, j = temp.length; i < j; i++){ 
        	$("#captcha").html('<img class="img-responsive" src="' + temp[i] + '" alt="img' + i + '" /> '+'&nbsp;&nbsp;'+'<i class="fa fa-refresh" aria-hidden="true"></i>');
        };
    };
   var isPortrait =function(){ 
   if($(window).width() < $(window).height()) {
   	return true;
   }else{
   	return false;   	
   }

   }; //initiate as false
	var isMobile = function(){ 
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){ 
			return true;	
		}else{
			return false;
		}
	}
	var makeSameHeight = function(){
		if (isMobile() == false && isPortrait() == false) {
			$(".makeSameheight").height($(".makeSameheight").parents(".row").height());
		}
	}
	
	
	
//MANIPULATIONS
    $(".open-1").click(function(event) {
    	openFirstPage();
    });       
    $(".open-2").click(function(event) {
    	openSecondPage();
    });
    $(".open-3").click(function(event) {
    	openThirdPage();
    });
    $("#captcha").click(function(event) {
    	refreshCapcha();
    });




$(window).resize(function(event) {
	setTimeout(function(){
		makeSameHeight();
	}, 500);
	
});

makeSameHeight();
refreshCapcha();

$('[data-toggle="tooltip"]').tooltip();
//on window change
$(window).change(function(event) {
	console.log("window changed");
});




});

			

$(document).ready(function(){

  $("input#area").change(function(){
      var input_box = $('#area').val();
      if ( input_box.length > 0 && input_box > 0) {
      	$("div#all_cake_all").html((input_box*50).toString() + "g");
        $("div#all_cake_cake").html((input_box*50).toString() + "g");

        $("div#bread_cake_bread").html((input_box*25).toString() + "g");
        $("div#bread_cake_cake").html((input_box*75).toString() + "g");

        $("div#all_corn_all").html((input_box*90).toString() + "g");
        $("div#all_corn_corn").html((input_box*10).toString() + "g");

        $("div#bread_corn_bread").html((input_box*75).toString() + "g");
        $("div#bread_corn_corn").html((input_box*25).toString() + "g");

        $("div#salt").html((input_box*5).toString() + "g");
        $("div#water").html((input_box*44).toString() + "mL");
      }
      else if (input_box.length === 0) {
        $("div#all_cake_all").html("50");
        $("div#all_cake_cake").html("");
		$("div#bread_cake_bread").html("");
		$("div#bread_cake_cake").html("");
		$("div#all_corn_all").html("");
		$("div#all_corn_corn").html("");
		$("div#bread_corn_bread").html("");
		$("div#bread_corn_corn").html("");
		$("div#salt").html("");
		$("div#water").html("");

		

      }
  });      
});

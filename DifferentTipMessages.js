var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var usePrint = false;
var useTip = false;
var useToast = false;
var useCustomLayout = false;

if(usePrint)print("This is a print");
if(useTip)ModPE.showTipMessage("This is a tip");
if(useToast){
 ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
	Toast.makeText(ctx, "This is a android toast", 1).show();
	}});
	}
	function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
	if(useCustomLayout)layoutToast();
	
	function layoutToast(){
ctx.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(ctx);
        layout.setOrientation(1);
        var toasty = new Button(ctx);
        toasty.setTextSize(10);
        toasty.setText("This is custom layout message");
	    	toasty.setTextColor(Color.WHITE);
        layout.addView(toasty);
 //need to set length
        newToast = new PopupWindow(layout, dip2px(5), dip2px(5)); 

        newToast.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        newToast.showAtLocation(ctx.getWindow().getDecorView(), Gravity.BOTTOM, 0, 0); //need to set pos of screen
        }catch(error){
            Toast.makeText(ctx, "An error occured: " + error, 1).show();
        }
    }}));
}
layoutToast();

//calls on world startup
function newLevel(){
usePrint = true;
useTip = true;
useToast = true;
useCustomLayout = true;
}

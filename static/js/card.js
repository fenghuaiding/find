function getcard(focus)
{
	var card=$('#card')
	var number=card.val().trim();
	var reg=/^\d{7}|\d{10}$/;
	if(!reg.test(number))
	{
		displayErr("校园卡号格式不对哦！");
		if (focus) card.focus()
		return false;
	}else{
		return number;
	}
}
function getName(focus)
{
	var input=$('#name')
	var name=input.val().trim();
    var reg=/^[\u4E00-\u9FA5]{2,5}(·[\u4E00-\u9FA5]{2,8})?$/;
	if(!reg.test(name))
	{
		displayErr("请填写正确的姓名哦!");
		if (focus) input.focus()
		return false;
	}else{
		return name;
	}
}
function displayErr(msg)
{
	$('#err').html(msg);
}
$('#card').blur(function()
	{
		if(getcard())displayErr('');
	});
$('#name').blur(function()
	{
		if(getName())displayErr('');
	});
$('#submit').click(function(){
	var number,name;
	if((number=getcard(true))&&(name=getName(true)))
	{
		displayErr('');
		$(this).text('正在通知...').attr('disabled','disabled');
		var data={number:number,name:name};
		$.post('/notify/', data, function(result)
		{
			if(result.status==0)
			{
				//未登录

			}else if(result.status==1)
			{
				
			}
		})
	}
});
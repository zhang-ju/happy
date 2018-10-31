// 一进入页面的时候，判断是否是登录状态，



$.ajax({
  type:'get',
  url:'/employee/checkRootLogin',
  dataType:'json',
  success:function(info){
    console.log(info);
    if(info.error===400){
      location.href='login.html';
    }
    if(info.success){
      console.log('已登录');
      
    }
  }
})
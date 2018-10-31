





$(document).ajaxStart(function(){
  //给docoment注册ajax全局事件：ajaxStart事件，第一个ajax请求开始发送时开始调用；
  // 开启进度条：
  NProgress.start();

});
$(document).ajaxStop(function(){
  // 在所有的ajax请求发送完成时调用；
  // 需求：关闭进度条；
  setTimeout(function(){
    NProgress.done();

  },1000)
});
// 二级导航栏切换;
$('.it_aside .nav .category').click(function(){
  $(this).next().stop().slideToggle();
  // console.log($(this).next());
})
// 2.主体部分的菜单切换；
$('.it_top .menu').click(function(){
  $('.it_aside').toggleClass('hidemenu');
  $('.it_main').toggleClass('hidemenu');
  $('.it_top').toggleClass('hidemenu');
});

// 3.退出功能，点击图标，显示模态框；
$('.it_top .logout').click(function(){
  $('#logoutModal').modal('show');

});

// 退出功能；
$('#logoutbtn').click(function(){
  $.ajax({
    type:'get',
    url:'/employee/employeeLogout',
    dataType:'json',
    success:function(info){
      if(info.success){//退出成功的话，跳转至登录页面；
        location.href='login.html';
      }
    }
  })
})



























































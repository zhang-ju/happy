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

  },500)
})



























































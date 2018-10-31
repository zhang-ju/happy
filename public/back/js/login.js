// 进行表单校验配置；
$(function(){
  // 1.表单校验配置；
  $('#form').bootstrapValidator({
    // 1.配置图标；
    feedbackIcons:{
      valid:'glyphicon glyphicon-ok',//校验成功
      invalid:'glyphicon glyphicon-remove',//校验失败
      validating:'glyphicon glyphicon-refresh'//校验中
    },
    //2. 配置校验字段：先给input标签设置name属性：
    
    fields:{
      username:{
        // 配置校验规则：
          validators:{
            notEmpty:{
              message:"用户名不能为空",
            },
            stringLength:{
              min:2,
              max:6,
              message:'用户名长度必须是2-6位'

            },
            callback:{
              message:'用户名不存在'
            }
            
          }
      },
      password:{
        validators:{
          notEmpty:{
            message:'密码不能为空'
          },
          stringLength:{
            min:6,
            max:12,
            message:"密码长度必须为6-12位"
          },
          callback:{
            message:'密码有误'
          }
          

        }
      }
    }












  })
  // 2.登录功能；
  //对表单注册校验成功事件：success.form.bv，如果是通过ajax提交，要阻止默认的跳转提交；
  $('#form').on('success.form.bv',function(e){
    e.preventDefault();//阻止默认行为（表单提交跳转功能）；
    $.ajax({
      type:"post",
      url:"/employee/employeeLogin",
      data:$('#form').serialize(),//表单序列化获取的数据
      dataType:"json",
      success:function(info){
        console.log(info);
        if(info.success){
          location.href="index.html"
        }
        if(info.error===1000){
          $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback')
        }
        if(info.error===1001){
          // $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback')
          $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback');
        }
      }
    })
  })

// 3.重置功能；
$('[type="reset"]').click(function(){
  // 调用实例的方法resetForm(),需要传参数，true
  $('#form').data('bootstrapValidator').resetForm(true);
})













})

























































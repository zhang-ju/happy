$(function(){
  var currentPage=1;
  var pageSize=5;
  var currentId;
  var isDelete;
  render();//渲染数据；
  function render(){
    $.ajax({
      type:'get',
      url:'/user/queryUser',
      data:{
        page:currentPage,
        pageSize:pageSize
      },
      dataType:'json',
      success:function(info){
          // console.log(info);
          
          var str=template('tmp',info);
          // console.log(str);
          $('.table tbody').html(str);
          
          $("#paginator").bootstrapPaginator({
            bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
            currentPage:info.page,//当前页
            totalPages:Math.ceil(info.total/info.size),//总页数
            size:"small",//设置控件的大小，mini, small, normal,large
            onPageClicked:function(event, originalEvent, type,page){
              //为按钮绑定点击事件 page:当前点击的按钮值;
              // console.log(page);
              currentPage=page;
              render();
              
            }
          });
      }
    });

  }
  
  //点击禁用按钮
  $('tbody').on('click','.btn',function(){
    $('#fbModal').modal('show');
    currentId=$(this).parent().data('id')
    isDelete=$(this).hasClass('btn-danger')?0:1;
  })

// 点击模态框中的确定按钮；
$('#submitBtn').on('click',function(){
  $.ajax({
    type:'post',
    url:'/user/updateUser',
    data:{
      id:currentId,
      isDelete:isDelete,
    },
    dataType:'json',
    success:function(info){
      // console.log(info);

    $('#fbModal').modal('hide');
  
    render();//渲染当前页；
      
    }
  })
})























})
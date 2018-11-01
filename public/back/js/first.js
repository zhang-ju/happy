$(function(){
  var currentPage=1;
  var pageSize=5;
  render();
  function render(){
    $.ajax({
      type:'GET',
      url:'/category/queryTopCategoryPaging',
      data:{
        page:currentPage,
        pageSize:pageSize
      },
      dataType:'json',
      success:function(info){
        // console.log(info);
        var str=template('firstTmp',info);
        // console.log(str);
        
        $('tbody').html(str);
        $('#fstpaginator').bootstrapPaginator({
          bootstrapMajorVersion:3,
          currentPage:info.page,
          totalPages:Math.ceil(info.total/info.size),
          size:'small',
          onPageClicked:function(a,b,c,page){
            currentPage=page;
            render();
          }

  
        })
        // $("#paginator").bootstrapPaginator({
        //   bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
        //   currentPage:1,//当前页
        //   totalPages:10,//总页数
        //   size:"small",//设置控件的大小，mini, small, normal,large
        //   onPageClicked:function(event, originalEvent, type,page){
        //     //为按钮绑定点击事件 page:当前点击的按钮值
        //   }
        // });
      }
    })

  }

// 点击添加分类按钮，弹出模态框；
$('#addBtn').on('click',function(){
  $('#addModal').modal('show');
})

// 表单校验；
$('#form').bootstrapValidator({
  feedbackIcons:{
    valid:'glyphicon glyphicon-ok',//校验成功
    invalid:'glyphicon glyphicon-remove',//校验失败
    validating:'glyphicon glyphicon-refresh'//校验中
  },
  fields:{
    categoryName:{
      validators:{
        notEmpty:{
          message:'请输入一级分类'
        }
      }
    }
  }
});

// 给表单注册校验成功事件
$('#form').on('success.form.bv',function(e){
  e.preventDefault();
  $.ajax({
    type:'post',
    url:'/category/addTopCategory',
    data:$('#form').serialize(),
    dataType:'json',
    success:function(info){
      // console.log(info);
      $('#addModal').modal('hide');
      currentPage=1;
      render();
      // 将表单中的内容和校验状态都重置
     $('#form').data('bootstrapValidator').resetForm(true);
    }
  })
})



})
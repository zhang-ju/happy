$(function(){
  var currentPage=1;
  var pageSize=5;
  render();
  //通过ajax渲染数据到表格中；
  function render(){
    $.ajax({
      type:'get',
      url:'/category/querySecondCategoryPaging',
      data:{
        page:currentPage,
        pageSize:pageSize
      },
      dataType:'json',
      success:function(info){
        // console.log(info);
        var str=template('secTmp',info);
        $('tbody').html(str);
        $('#secpaginator').bootstrapPaginator({
          bootstrapMajorVersion:3,
          totalPages:Math.ceil(info.total/info.size),
          currentPage:info.page,
          onPageClicked:function(a,b,c,page){
            currentPage=page;
            render();
          }
        })
      }
    })

  }

  // 点击添加分类按钮模态框显示；
  $('#addBtn').on('click',function(){
    $('#secModal').modal('show');
    $.ajax({
      type:'get',
      url:'/category/queryTopCategoryPaging',
      data:{
        page:1,
        pageSize:55
      },
      dataType:'json',
      success:function(info){
        console.log(info);
        var str=template('topTmp',info);
        $('.dropdown-menu').html(str);
      }
    })
  });

  //注册事件委托，点击a时 将其文本赋值给... ,将其id赋值给...
  $('.dropdown-menu').on('click','a',function(){
    var txt=$(this).text();
    // $(this).text()
    $('#topText').text(txt);

    var id=$(this).data('id');
    $('[name="categoryId"]').val(id);
    $('#form').data('bootstrapValidator').updateStatus('categoryId','VALIDED',)
  });

  // 配置文件上传插件；
  console.log($("#fileupload"));
  
  $("#fileupload").fileupload({
    dataType:"json",
    //e：事件对象
    //data：图片上传后的对象，通过data.result.picAddr可以获取上传后的图片地址
    done:function (e, data) {
      // console.log(data);
      var picUrl=data.result.picAddr;
      $('#imgBox img').attr('src',picUrl);

      $('[name="brandLogo"]').val(picUrl);
    $('#form').data('bootstrapValidator').updateStatus('brandLogo','VALIDED',)

    }
});

// 表单校验：
$('#form').bootstrapValidator({
  excluded: [],
  feedbackIcons:{
    valid:'glyphicon glyphicon-ok',//校验成功
    invalid:'glyphicon glyphicon-remove',//校验失败
    validating:'glyphicon glyphicon-refresh'//校验中
  },
  fields:{
    categoryId:{
      validators:{
        notEmpty:{
          message:'请选择一级分类'
        }
      }
    },
    brandName:{
      validators:{
        notEmpty:{
          message:'请输入二级名称'
        }
      }
    },
    brandLogo:{
      validators:{
        notEmpty:{
          message:'请选择图片'
        }
      }
    },
   
  }
})
// 阻止默认事件
$('#form').on('success.form.bv',function(e){
  e.preventDefault();
  $.ajax({
    type:'post',
    url:'/category/addSecondCategory',
    data:$(this).serialize(),
    dataType:'json',
    success:function(info){
      console.log(info);
    $('#secModal').modal('hide');

      currentPage=1;
      render();
      
    }
  })
})





















})
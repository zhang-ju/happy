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
        console.log(info);
        var str=template('firstTmp',info);
        console.log(str);
        
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









})
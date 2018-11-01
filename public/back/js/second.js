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
  })
























})
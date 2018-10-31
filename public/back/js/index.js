$(function(){
  var e_left = echarts.init(document.querySelector('.it_content .content_left'));

        // 指定图表的配置项和数据
        var option1 = {
            title: {
                text: '2017年注册人数'
            },
            tooltip: {},
            // 图例；
            legend: {
                data:['人数']
            },
            xAxis: {
                data: ["1月","2月","3月","4月","5月","6月"]
            },
            yAxis: {},
            // 数据。
            series: [{
                name: '人数',
                type: 'bar',
                data: [1000, 1500, 1800, 1200, 1000, 500]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        e_left.setOption(option1);


  var e_right = echarts.init(document.querySelector('.it_content .content_right'));

        // 指定图表的配置项和数据
        var option2 = {
          title : {
            text: '热门品牌销售',
            subtext: '2017年6月',
            x:'center'
        },
        // 提示框组件：
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 图例；
        legend: {
          // 数据垂直排列
            orient: 'vertical',//方向；
            left: 'left',
            data: ['耐克','阿迪','新百伦','李宁','阿迪王']
        },
        // 数据
        series : [
            {
                name: '品牌',
                type: 'pie',
                radius : '55%',//圆的大小，直径。相对于盒子的宽度；
                // 
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'耐克'},
                    {value:310, name:'阿迪'},
                    {value:234, name:'新百伦'},
                    {value:135, name:'李宁'},
                    {value:1548, name:'阿迪王'}
                ],
                itemStyle: {
                  
                    emphasis: {//(强调部分，重点)
                        shadowBlur: 30,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 1)'
                    }
                }
            }
        ]
        };

        // 使用刚指定的配置项和数据显示图表。
        e_right.setOption(option2);
})
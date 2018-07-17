//react库
import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

// // 引入 ECharts 主模块
// var echarts = require('echarts/lib/echarts');
// // 引入柱状图
// require('echarts/lib/chart/bar');
// // 引入提示框和标题组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');

export default class Pie extends Component {

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pie'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'pie'
            },
            backgroundColor: '#2c343c',
            textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            },
            visualMap: {
                // 不显示 visualMap 组件，只用于明暗度的映射
                show: false,
                // 映射的最小值为 80
                min: 80,
                // 映射的最大值为 600
                max: 600,
                inRange: {
                    // 明暗度的范围是 0 到 1
                    colorLightness: [0, 1]
                }
            },
            tooltip: {},
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    roseType: 'angle',
                    data: [
                        {
                            value: 235,
                            name: '视频广告'
                        },
                        { value: 274, name: '联盟广告' },
                        { value: 310, name: '邮件营销' },
                        { value: 335, name: '直接访问' },
                        { value: 400, name: '搜索引擎' }
                    ],
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }

    render() {
        return (
            <div id="pie" style={{ width: '100%', height: 400 }}></div>
        )
    }
}
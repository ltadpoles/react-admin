import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

class Circle extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('circle'))
        myChart.setOption({
            angleAxis: {
            },
            radiusAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四'],
                z: 10
            },
            polar: {
            },
            series: [{
                type: 'bar',
                data: [1, 2, 3, 4],
                coordinateSystem: 'polar',
                name: 'A',
                stack: 'a'
            }, {
                type: 'bar',
                data: [2, 4, 6, 8],
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a'
            }, {
                type: 'bar',
                data: [1, 2, 3, 4],
                coordinateSystem: 'polar',
                name: 'C',
                stack: 'a'
            }],
            legend: {
                show: true,
                data: ['A', 'B', 'C']
            }
        })
        window.onresize = myChart.resize;
    }
    render() {
        return (
            <div id="circle" style={{ height: 300 }}></div>
        );
    }
}

export default Circle;
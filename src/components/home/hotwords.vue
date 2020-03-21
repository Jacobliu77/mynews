<template>
     <div style="width:100%;height:200px;" :id="echarts" class="echarts"  ref="echarts"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'EchartsComponents',
  props: {
    // 接收父组件传递过来的信息
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  methods: {
    drawChart () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(this.echarts))
      // 绘制图表
      var colorList = [
        [
          '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
          '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
          '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
          '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
        ],
        [
          '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
          '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
          '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
          '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
        ],
        [
          '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
          '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
          '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
          '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
        ]
      ][2]
      myChart.setOption({
        title: {
          show: true, // 显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: '', // 主标题文本，'\n'指定换行
          x: 'center', // 水平安放位置，默认为左对齐，可选为：
          // 'center' ¦ 'left' ¦ 'right'
          // ¦ {number}（x坐标，单位px）
          y: 'bottom', // 垂直安放位置，默认为全图顶端，可选为：
          // 'top' ¦ 'bottom' ¦ 'center'
          // ¦ {number}（y坐标，单位px）
          // textAlign: null          // 水平对齐方式，默认根据x设置自动调整
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ccc', // 标题边框颜色
          borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
          padding: 5, // 标题内边距，单位px，默认各方向内边距为5，
          // 接受数组分别设定上右下左边距，同css
          itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
          textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333' // 主标题文字颜色
          },
          subtextStyle: {
            color: '#aaa' // 副标题文字颜色
          }
        },
        backgroundColor: '#fff',
        tooltip: {},
        animationDurationUpdate: function (idx) {
        // 越往后的数据延迟越大
          return idx * 100
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 500,
            edgeLength: 10
          },
          roam: true,
          label: {
            normal: {
              show: true
            }
          },
          data: [{
            'name': '新冠肺炎',
            'value': 2373,
            'symbolSize': 34,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[0],
                'color': colorList[0]
              }
            }
          }, {
            'name': '女篮',
            'value': 5449,
            'symbolSize': 45,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[1],
                'color': colorList[1]
              }
            }
          }, {
            'name': '火神山',
            'value': 2289,
            'symbolSize': 43,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[2],
                'color': colorList[2]
              }
            }
          }, {
            'name': '光头',
            'value': 2518,
            'symbolSize': 35,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[3],
                'color': colorList[3]
              }
            }
          }, {
            'name': '逝去',
            'value': 4730,
            'symbolSize': 54,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[4],
                'color': colorList[4]
              }
            }
          }, {
            'name': '违法',
            'value': 1952,
            'symbolSize': 37,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[5],
                'color': colorList[5]
              }
            }
          }, {
            'name': '康复',
            'value': 926,
            'symbolSize': 45,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[6],
                'color': colorList[6]
              }
            }
          }, {
            'name': '寒风中',
            'value': 4536,
            'symbolSize': 44,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[7],
                'color': colorList[7]
              }
            }
          }, {
            'name': '连降5天',
            'value': 750,
            'symbolSize': 34,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[8],
                'color': colorList[8]
              }
            }
          }, {
            'name': '战疫',
            'value': 493,
            'symbolSize': 51,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[9],
                'color': colorList[9]
              }
            }
          }, {
            'name': '无新增',
            'value': 385,
            'symbolSize': 40,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[10],
                'color': colorList[10]
              }
            }
          }, {
            'name': '驰援武汉',
            'value': 4960,
            'symbolSize': 55,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[11],
                'color': colorList[11]
              }
            }
          }, {
            'name': '第一线',
            'value': 8694000,
            'symbolSize': 77,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[12],
                'color': colorList[12]
              }
            }
          }, {
            'name': '惠民政策',
            'value': 5668,
            'symbolSize': 48,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[13],
                'color': colorList[13]
              }
            }
          }, {
            'name': '团圆',
            'value': 339,
            'symbolSize': 44,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[14],
                'color': colorList[14]
              }
            }
          }, {
            'name': '心理援助',
            'value': 671,
            'symbolSize': 41,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[15],
                'color': colorList[15]
              }
            }
          }, {
            'name': '元宵节',
            'value': 27000,
            'symbolSize': 67,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[16],
                'color': colorList[16]
              }
            }
          }, {
            'name': '行动',
            'value': 10777000,
            'symbolSize': 75,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[17],
                'color': colorList[17]
              }
            }
          }, {
            'name': '逆行者',
            'value': 92000,
            'symbolSize': 72,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[18],
                'color': colorList[18]
              }
            }
          }, {
            'name': '肺炎',
            'value': 20000,
            'symbolSize': 81,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'shadowBlur': 100,
                'shadowColor': colorList[19],
                'color': colorList[19]
              }
            },
            'url': 'https://gallery.echartsjs.com/preview.html?c=xPLngHx_Z&v=1'
          }]
        }]
      })
    }
  },
  created () {
  },
  computed: {
    echarts () {
      return 'echarts' + Math.random() * 100000
    }
  },
  mounted: function () {
    const vm = this
    vm.$nextTick(() => {
      vm.drawChart()
    })
  }
}
</script>

<style lang='less' scoped>

</style>

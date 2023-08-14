import { h, render } from 'preact'
import { renderToString } from 'preact-render-to-string' // 引入 `renderToString` 方法
import './assets/style.css'

export function Page() {
  return (
    <section class="job-page">
      <h1>Job Not Found</h1>
      <p>It's gone :(</p>
      <CardListComp />
    </section>
  )
}
// 生成组件的方法
const generateCards = () => {
  const dataList = [
    {
      jobName: '资深前端开发工程师',
      jobSalary: '25-50K',
      jobLabels: ['上海 杨浦区 五角场', '3-5年', '本科'],
      brandName: 'bilibili',
    },
    {
      jobName: '高级Web研发工程师',
      jobSalary: '30-40K·16薪',
      jobLabels: ['上海 徐汇区 漕河泾', '5-10年', '本科'],
      brandName: '上海鹰角网络',
    },
    {
      jobName: 'web前端工程师',
      jobSalary: '15-30K·14薪',
      jobLabels: ['上海 浦东新区 陆家嘴', '3-5年', '本科'],
      brandName: '万得',
    },
    {
      jobName: '前端开发工程师(C端向)',
      jobSalary: '20-40K·16薪',
      jobLabels: ['上海 杨浦区 五角场', '经验不限', '学历不限'],
      brandName: '叠纸游戏',
    },
    {
      jobName: '高级web前端开发工程师（上海）',
      jobSalary: '18-35K·14薪',
      jobLabels: ['上海 浦东新区 陆家嘴', '经验不限', '本科'],
      brandName: '万得',
    },
    {
      jobName: '前端开发工程师',
      jobSalary: '23-45K·15薪',
      jobLabels: ['上海 长宁区 北新泾', '1-3年', '本科'],
      brandName: '携程集团',
    },
    {
      jobName: 'Web前端开发工程师',
      jobSalary: '20-30K·15薪',
      jobLabels: ['上海 静安区 七浦路', '1-3年', '本科'],
      brandName: '视微',
    },
    {
      jobName: '前端开发工程师',
      jobSalary: '15-30K·14薪',
      jobLabels: ['上海 长宁区 仙霞', '3-5年', '本科'],
      brandName: '友塔游戏',
    },
    {
      jobName: '抖音-本地生活-酒旅-资深前端工程师',
      jobSalary: '20-40K·15薪',
      jobLabels: ['上海 徐汇区 漕河泾', '3-5年', '本科'],
      brandName: '字节跳动',
    },
    {
      jobName: '游戏事业部-Web 前端开发工程师',
      jobSalary: '25-40K',
      jobLabels: ['上海 徐汇区 漕河泾', '3-5年', '本科'],
      brandName: 'SenseTime',
    },
    {
      jobName: 'web前端开发',
      jobSalary: '20-40K',
      jobLabels: ['上海 长宁区 中山公园', '3-5年', '本科'],
      brandName: '黑湖科技',
    },
    {
      jobName: '前端开发工程师',
      jobSalary: '19-26K',
      jobLabels: ['上海 徐汇区 漕河泾', '3-5年', '本科'],
      brandName: '杭州万科物业',
    },
    {
      jobName: '高级前端开发工程师（快应用）',
      jobSalary: '17-25K·14薪',
      jobLabels: ['上海 浦东新区 三林', '3-5年', '本科'],
      brandName: '七猫',
    },
    {
      jobName: 'WEB前端开发（运营平台）',
      jobSalary: '27-50K·16薪',
      jobLabels: ['上海 徐汇区 田林', '3-5年', '本科'],
      brandName: '米哈游',
    },
    {
      jobName: '用户增长前端工程师',
      jobSalary: '20-40K·16薪',
      jobLabels: ['上海 长宁区 仙霞', '1-3年', '本科'],
      brandName: '拼多多',
    },
    {
      jobName: '前端工程师',
      jobSalary: '18-25K·13薪',
      jobLabels: ['上海 长宁区 北新泾', '3-5年', '学历不限'],
      brandName: '猫眼娱乐',
    },
    {
      jobName: '资深Web前端工程师（react）',
      jobSalary: '25-40K·14薪',
      jobLabels: ['上海 浦东新区 张江', '3-5年', '本科'],
      brandName: '欢乐互娱',
    },
    {
      jobName: 'WEB前端开发工程师(A26212)',
      jobSalary: '15-30K·14薪',
      jobLabels: ['上海 浦东新区 张江', '3-5年', '本科'],
      brandName: '上海欢动',
    },
    {
      jobName: '高级web前端工程师',
      jobSalary: '30-50K·15薪',
      jobLabels: ['上海 徐汇区 漕河泾', '5-10年', '本科'],
      brandName: '莉莉丝游戏',
    },
    {
      jobName: '前端开发工程师',
      jobSalary: '28-45K·16薪',
      jobLabels: ['上海 杨浦区 五角场', '3-5年', '本科'],
      brandName: '叠纸游戏',
    },
    {
      jobName: '平台前端开发工程师',
      jobSalary: '15-30K·14薪',
      jobLabels: ['上海 长宁区 仙霞', '1-3年', '本科'],
      brandName: '友塔游戏',
    },
    {
      jobName: '广告创意-前端',
      jobSalary: '30-50K·15薪',
      jobLabels: ['上海 闵行区 合川路', '1-3年', '本科'],
      brandName: '北京字节跳动',
    },
    {
      jobName: '前端开发工程师（上海）-企业效率业务',
      jobSalary: '35-55K·16薪',
      jobLabels: ['上海 黄浦区 人民广场', '3-5年', '本科'],
      brandName: '小红书',
    },
    {
      jobName: '高级/资深web前端开发工程师(J12489)',
      jobSalary: '20-40K·14薪',
      jobLabels: ['上海 浦东新区 陆家嘴', '3-5年', '本科'],
      brandName: '阅文集团',
    },
    {
      jobName: '前端研发高级工程师-风控方向（上海）',
      jobSalary: '20-40K',
      jobLabels: ['上海 黄浦区 新天地', '3-5年', '本科'],
      brandName: '小红书',
    },
    {
      jobName: '前端开发工程师',
      jobSalary: '20-40K·16薪',
      jobLabels: ['上海', '1-3年', '本科'],
      brandName: '拼多多',
    },
    {
      jobName: '腾讯广告商业广告前端开发工程师',
      jobSalary: '25-50K',
      jobLabels: ['上海 徐汇区 漕河泾', '3-5年', '本科'],
      brandName: '腾讯',
    },
    {
      jobName: 'web前端开发工程师',
      jobSalary: '20-40K·15薪',
      jobLabels: ['上海 徐汇区 徐家汇', '3-5年', '本科'],
      brandName: '彩云科技',
    },
    {
      jobName: '高级前端开发工程师（vue/react/c端/上海）',
      jobSalary: '25-40K·14薪',
      jobLabels: ['上海 黄浦区 人民广场', '3-5年', '本科'],
      brandName: 'SHEIN（广州）',
    },
    {
      jobName: 'web前端工程师',
      jobSalary: '20-25K',
      jobLabels: ['上海 杨浦区 五角场', '经验不限', '硕士'],
      brandName: 'bilibili',
    },
    {
      jobName: 'web前端工程师',
      jobSalary: '25-35K',
      jobLabels: ['上海', '3-5年', '本科'],
      brandName: 'SenseTime',
    },
    {
      jobName: '前端软件开发工程师',
      jobSalary: '20-35K·15薪',
      jobLabels: ['上海 浦东新区 金桥', '3-5年', '本科'],
      brandName: '小米',
    },
    {
      jobName: '前端开发工程师-新业务方向',
      jobSalary: '25-50K·16薪',
      jobLabels: ['上海 黄浦区 新天地', '3-5年', '本科'],
      brandName: '小红书',
    },
    {
      jobName: '高级前端开发工程师 (MJ004836)',
      jobSalary: '20-30K·15薪',
      jobLabels: ['上海 长宁区 北新泾', '3-5年', '本科'],
      brandName: '携程集团',
    },
    {
      jobName: '前端工程师',
      jobSalary: '30-35K·15薪',
      jobLabels: ['上海 长宁区 北新泾', '3-5年', '本科'],
      brandName: '猫眼娱乐',
    },
    {
      jobName: '广告投放前端开发-商业技术部',
      jobSalary: '20-40K·16薪',
      jobLabels: ['上海 黄浦区 新天地', '1-3年', '本科'],
      brandName: '小红书',
    },
    {
      jobName: '高级web开发工程师',
      jobSalary: '30-60K·16薪',
      jobLabels: ['上海 徐汇区 漕河泾', '5-10年', '本科'],
      brandName: '莉莉丝游戏',
    },
    {
      jobName: 'WEB前端开发（官网活动） (MJ003254)',
      jobSalary: '27-50K·16薪',
      jobLabels: ['上海 徐汇区 田林', '3-5年', '本科'],
      brandName: '米哈游',
    },
    {
      jobName: '【中台】WEB前端开发工程师(A192350)',
      jobSalary: '20-40K·16薪',
      jobLabels: ['上海 闵行区 虹桥', '3-5年', '本科'],
      brandName: '沐瞳科技',
    },
    {
      jobName: '前端开发工程师-8VHV1',
      jobSalary: '20-35K·15薪',
      jobLabels: ['上海 徐汇区 漕河泾', '3-5年', '本科'],
      brandName: '今日头条',
    },
  ]
  return dataList.map((item, index) => (
    <div class="job-card" key={index}>
      <p>
        {item.brandName} | {item.jobName} | {item.jobSalary} | {item.jobLabels}
      </p>
    </div>
  ))
}

// 在主组件中使用生成的组件
const CardListComp = () => {
  return <div class="card-list">{generateCards()}</div>
}
const renderedApp = renderToString(<CardListComp />)
console.log(renderedApp)

function Card(jobName: string) {
  return <div>{jobName}</div>
}

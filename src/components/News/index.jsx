import React from 'react'
import SectionHeader from '../../UI/SectionHeader'
import SingleNews from '../SingleNew'
import new1 from '../../images/new1.png'
import new2 from '../../images/new2.png'
import new3 from '../../images/new3.png'
import './News.scss'

const News = () => {

  const DUMMY__NEWS = [
    {
      id: 1,
      img: new1,
      title: 'الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية',
      desc: 'شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة والمختلطة. تظهر الإحصاءات'
    },
    {
      id: 2,
      img: new2,
      title: 'لماذا يعتبر أمان التطبيق مهمًا للأعمال؟',
      desc: 'تطبيقات البرمجيات هي مكونات أساسية لنجاح المنظمة. لسوء الحظ ، بينما التطبيق'
    },
    {
      id: 3,
      img: new3,
      title: 'حشد الأمن - هل هو بديل للاختراق؟',
      desc: 'نمت شعبية برامج الأمن الجماعي إلى الحد الذي وصلت إليه بعض الشركات'
    },
  ]

  return (
    <div className='news__section section__space'>
      <div className="container">
        <SectionHeader
          title='الأخبار'
          titleColor='#FFFFFF'
        />
        <div className="news d-flex flex-column">
          {DUMMY__NEWS.map(n => (
              <SingleNews
                key={n.id}
                img={n.img}
                title={n.title}
                desc={n.desc}
              />
          ))}
        </div>
      </div>
    </div>
  )
}

export default News
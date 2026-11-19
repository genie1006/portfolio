import React from 'react'
import "../css/hero.css"

export const Hero = () => {
  return (
    <section id='hero'>
      <div className="inner">
        <div className="top">
          <div className="image">
            <img src="/img/hero.png" alt="프로필 이미지" />
          </div>
          <div className="name">
            <h1>김진희</h1>
            <h1>JINHEE KIM</h1>
          </div>
        </div>
        <div className="bottom">
          <h2 className='en'>WEB PUBLISHER & FRONT-END DEVELOPER</h2>
          <h3 className='ko'>작은 코드부터 전체의 흐름까지, 더 효율적인 작업 방식을 고민합니다.</h3>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import "../css/info.css"

export const Info = () => {
  return (
    <section id="info">
      <div className="inner">
        <div className="about">
          <h4 className="en">About Me</h4>
          <h2 className="ko">김진희</h2>
          <h4 className="en">WEB PUBLISHER & FRONT-END DEVELOPER</h4>
          <h5 className="ko">
            새로운 환경과 낯선 일에도 주저하지 않고 도전하며, 맡은 일은 책임감을 가지고 끝까지 해왔습니다. 다양한 업무를 경험하며 문제를 해결하는 과정에서 배움의 즐거움을 알게 되었고, 이제는 웹 개발이라는 새로운 분야에서 꾸준히 배우고 성장하고 있습니다.
          </h5>
        </div>
        <div className="cover_letter">
          <button title='자기소개서 보기'>
            <h5 className="ko">자세히 보기</h5>
          </button>
        </div>
      </div>
    </section>
  )
}

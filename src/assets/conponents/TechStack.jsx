import React from 'react'
import "../css/techstack.css"

export const TechStack = () => {
  const techData = [
    {
      category: "DESIGN",
      skills: ["Photoshop", "Figma"]
    },
    {
      category: "WEB PUBLISHING",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery"]
    },
    {
      category: "DEVELOPMENT",
      skills: ["React", "Git", "GitHub", "Vite"]
    }
  ];

  return (
    <section id='techstack'>
      <div className="inner">
        <h4 className='en'>TECH STACK</h4>

        <section className='tech_list'>
          {techData.map((tech, index) => (
            <article className="tech_item" key={tech.category}>
              <h3 className='tech_cate en'>
                {String(index + 1).padStart(2, '0')}. {tech.category}
                {/* String : 숫자열을 문자열로 변환 */}
                {/* padStart(2, '0') : 1을 01로 표시 
                문자열.padStart(최종길이, 채울문자)*/}
              </h3>

              <h2 className='en'>
                {tech.skills.join(' · ')}
                {/* join(' · ') :	배열 항목 사이에 구분점 추가 */}
              </h2>
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';
import "../css/footer.css"

export const Footer = () => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("genie655@naver.com");
      alert("이메일이 복사되었습니다!");
    } catch (error) {
      alert("복사에 실패했습니다.");
    }
  };

  return (
    <footer id='footer'>
      <div className="inner">
        <section className='contact'>
          <h4 className='cont_tit en'>contact</h4>

          <div className="cont_list">

            <div className="cont_item">
              <h5 className="label en">EMAIL</h5>
              <a 
                href="mailto:genie655@naver.com" className='cont_info'
                rel="noopener noreferrer"
              >
                <h5 className='en'>genie655@naver.com</h5>
              </a>
              <button 
                onClick={copyEmail} 
                className='cont_link en'
              >
                copy
                <img src={`${import.meta.env.BASE_URL}img/copy.png`} alt="이메일_복사_아이콘" />
              </button>
            </div>

            <div className="cont_item">
              <h5 className="label en">GITHUB</h5>
              <a 
                href="https://github.com/genie1006" 
                target='_blank' 
                rel="noopener noreferrer"
                className='cont_info'
              >
                <h5 className='en'>github.com/genie1006</h5>
              </a>
              <a 
                href="https://github.com/genie1006" 
                target="_blank" 
                rel="noopener noreferrer"
                className='cont_link en'
              >
                visit
                <img src={`${import.meta.env.BASE_URL}img/visit.png`} alt="페이지_방문_아이콘" />
              </a>
            </div>

            <div className="cont_item">
              <h5 className="label en">PHONE</h5>
              <a 
                href="tel:01073630276" 
                rel="noopener noreferrer"
                className='cont_info en'
              >
                <h5 className="en">010-7363-0276</h5>
              </a>
              <a 
                href="tel:01073630276" 
                rel="noopener noreferrer"
                className='cont_link en'
              >
                call
                <img src={`${import.meta.env.BASE_URL}img/call.png`} alt="전화하기_아이콘" />
              </a>
            </div>

          </div>
        </section>

        <section className='f_right'>
          <h2 className='f_logo'>
            <Link to="/">JINHEE</Link>
          </h2>
          <p className='f_copy'>© 2026 JINHEE KIM. ALL RIGHTS RESERVED.</p>
        </section>
      </div>
    </footer>
  )
}

import styled from 'styled-components'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import Seventh from './components/Seventh'
import Footer from './components/Footer'

const Container = styled.div`
background: pink;
overflow: hidden;
width: 100%;
`;


const Fixed = styled.div`
position: fixed;
width: 100%;
top: 0;
z-index: 10;

    .logo {
      display: block;
      margin: 40px 0 0 6%;
      width: 28%;
      max-width: 142px;

            img {
              max-width: 100%;
              height: auto;
              vertical-align: baseline;
            }           
          }

    .app-download {
      position: absolute;
      width: 45%;
      top: 19px;
      right: 0;

          img{
            max-width: 100%;
            height: auto;
            vertical-align: baseline;
          }
      }
    

    .sns-list {
      position: absolute;
      bottom: 0;
      right: 50px;
      width: 50%;
      text-align: right;

          li {
            display: inline-block;
            width: 10%;
            text-align: center;
            vertical-align: middle;
            margin-right: 0;
          }
    }  
  }

  @media screen and (min-width: 320px) {
    .sns-list {
      display: none !important;
    }
  }  

  @media screen and (min-width: 768px) {
    width: 1024px;
    min-width: 1024px !important;
    left: 50%;
    margin-left: -512px;

    .logo {
      width: 100%;
    }

    .sns-list {
      display: block !important;
      position: absolute;
      bottom: 0;
      right: 100px;
      width: 50%;
      text-align: right; 
    }

    .app-download{
      width: 200px;
      right: 10px;
      top: 130px;

      img {
        width: 200px;
      }
    }

  }


  
  @media screen and (min-width: 1024px) {
  // width: 1024px;
  // min-width: 1024px !important;
  // left: 50%;
  // margin-left: -512px;

      .logo {
        margin-top: 60px;
        margin-left: 50px;
      }

     .sns-list {
        display: block !important;
        position: absolute;
        bottom: 0;
        right: 100px;
        width: 50%;
        text-align: right; 
      }

  }
`;


const Wrapper = styled.div`
    height: 100%;
    position: relative;
    touch-action: none;
    transform: translate3d(0px, 0px, 0px);
    transition: all 700ms ease 0s;
  
`;


  

function App() {
  return (
    <Container>
      <Fixed>
        <div className="logo">
          <img src="/images/logo.png" alt="로고"/>
        </div>
        <a className="app-download">
          <img src="/images/btn_down_app.png" alt="배민 앱 다운로드"/>
        </a>
        <ul className="sns-list">
          <li>
            <a title="facebook" href="http://www.facebook.com/smartbaedal">
              <img src="/images/iconFacebook.png" alt="페이스북"/>
            </a>
          </li>
          <li>
            <a title="instagram" href="https://www.instagram.com/baemin_official">
              <img src="/images/iconInstagram.png" alt="인스타그램"/>
            </a>
          </li>
          <li>
            <a title="naver blog" href="https://blog.naver.com/smartbaedal">
              <img src="/images/iconBlog.png" alt="네이버블로그"/>
            </a>
          </li>
          <li>
            <a title="youtube" href="https://www.youtube.com/user/smartbaedal2">
              <img src="/images/iconYoutube.png" alt="유튜브"/>
            </a>
          </li>
        </ul>
      </Fixed>
      <Wrapper>
        <First></First>
        <Second></Second>
        <Third></Third>
        <Fourth></Fourth>
        <Fifth></Fifth>
        <Sixth></Sixth>
        <Seventh></Seventh>
        <Footer></Footer>
      </Wrapper>

    </Container>
  );
}

export default App;

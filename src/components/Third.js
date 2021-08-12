import styled from 'styled-components'

const Container = styled.div`
width: 100%;


`;

const Section = styled.div`
max-width: 1024px;
margin: 0 auto;


`;


const Content = styled.div`
position: relative;
height: 100vh;
padding: 0 6%;
color: #ffffff;
background-color: #2ac1bc;
box-sizing: border-box;

        .header-text{
            position: absolute;
            top: 18%;
            left: 6%;

                .header-text1 {
                    width: 85%;
                    max-width: 440px;

                            img {
                                max-width: 100%;
                                height: auto;
                                vertical-align: baseline;
                            }
                }
            }
            
        .app-download {
            position: absolute;
            bottom: 0;
            max-width: 262px;
            right: 0;
            width: 55%;
        

            img {
                width: 100%;                      
            }
        }



        .content-desc {
            position: absolute;
            margin-top: 6%;
            font-weight: 300;

            .sub-desc {
                display: block;
                font-size: 0.9em;
                font-weight: 100;
                line-height: 2em;
            }
        }

        .animation {
            position: absolute;
            bottom: 0;
            right: -5%;
            width: 85%;

            img {
                max-width: 100%;
                height: auto;
            }
        }


@media screen and (min-width: 768px) {
    width: 1024px;
    margin: 0 auto;
    padding: 0 50px;


    .header-text {
        top: 20%;
        left: 50px;

        .header-text1 {
                width: 500px;
        }

    }

        .animation {

        
        }

}

@keyframes bike {
    0% {
        transform: translateX(-50%) translateY(-50%);
    }

    100% {
        transform: translateX(0%) translateY(0%);
    }
}

`;
    

const Third = () => {
    return (
        <Container>
            <Section>
                    <Content>         
                        <div className="header-text">
                            <h1 className="header-text1">
                                <img src="/images/main_text_03.png" alt="줄 서서 먹던 맛집도 배달 가능"/>
                            </h1>
                            <p className="content-desc">배달이 안되던 동네 맛집까지 ~<br />배민라이더스가 직접 배달해드립니다.
                            <span className="sub-desc">서울 전지역, 경기 및 광역시 일부 지역에서 서비스 이용 가능!</span></p>
                        </div>
  
                        
                        <div className="animation">
                            <img src="/images/img-people.png" alt="배달이"/>            
                        </div>     
                    </Content>
                </Section>
        </Container>
    )
}

export default Third;
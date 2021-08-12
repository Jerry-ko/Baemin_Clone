import styled from 'styled-components'

const Container = styled.div`
width: 100%;

    .icon-scroll {
        position: absolute;
        bottom: 3%;
        left: 6%;
        width: 20%;
        z-index: 100;
    }
`;

const Section = styled.div`
max-width: 1024px;
margin: 0 auto;


`;

// const Desert = styled.img`
// height: 100vh;
// background-repeat: no-repeat;
// background-position: 50% 50%;
// background-size: cover;

// `;

const Logo = styled.img`
position: absolute;
margin: 40px 0 0 6%;
width: 28%;
max-width: 142px;
`;



const Content = styled.div`
position: relative;
height: 100vh;
padding: 0 6%;
color: #ffffff;
// background-color: #2ac1bc;
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
       

            .road {
                position: absolute;
                bottom: 27%;
                right: 31%;
                width: 42%;

                        img {
                            max-width: 100%;
                            height: auto;
                        }
               
            }
            .bike {
                position: absolute;
                bottom: 8%;
                right: 0%;
                width: 42%;

                img {
                    max-width: 100%;
                    height: auto;
                }
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

            .road {
                position: absolute;
                bottom: 16%;
                right: 19%;
                width: 232px;
            
                img {
                    position: absolute;
                    bottom: 16%;
                    right: 21%;
                }
               
            }

            .bike {
                position: absolute;
                bottom: -1%;
                right: 11%;
                width: 204px;
                animation: bike 0.8s ease forwards;

                img {
                    max-width: 100%;
                    height: auto;
                }
            }
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
    

const Second = () => {
    return (
        <Container>
            <Section>
                    <Content>         
                        <div className="header-text">
                            <h1 className="header-text1">
                                <img src="/images/main_text_02.png" alt="든든한 집밥 한상이 간절할 때"/>
                            </h1>
                            <p className="content-desc">3천만 이상이 선택한 배달의 민족,<br />업계 최다 배달가능 업소 보유 중!
                            <span className="sub-desc">(2017년 11월 기준)</span></p>
                        </div>
  
                        
                        <div className="animation">
                            <div className="road">
                                <img src="/images/img-road.png" alt="배달이"/>
                            </div>
                            <div className="bike">
                                <img src="/images/img-bike.png" alt="배달이"/>
                            </div>                   
                        </div>     
                    </Content>
                </Section>
        </Container>
    )
}

export default Second;
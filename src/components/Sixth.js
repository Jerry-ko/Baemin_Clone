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
box-sizing: border-box;

        .header-text{
            position: absolute;
            top: 18%;
            left: 6%;

                .header-text1 {
                    width: 70%;
                    max-width: 440px;

                            img {
                                max-width: 100%;
                                height: auto;
                                vertical-align: baseline;
                            }
                }
            }
            
  

            .content-desc {
                position: absolute;
                margin-top: 6%;
                font-weight: 300;
            }

                .sub-desc {
                    position: absolute;
                    margin-top: 20%;
                    font-weight: 300;
                    color: rgba(255,255,255,0.5)
                }

            

        .animation {
            position: absolute;
            bottom: 60px;
            right: -10%;
            width: 80%;


            img {
                vertical-align: top;
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
            width: 600px;
            bottom: 10%;
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
    

const Sixth = () => {
    return (
        <Container>
        <Section>
                <Content>         
                    <div className="header-text">
                        <h1 className="header-text1">
                            <img src="/images/main_text_06.png" alt="???????????? ????????????! B??????"/>
                        </h1>
                        <p className="content-desc">???????????? ?????? ?????????, ???????????? ?????????<br />???????????? ????????? ?????? ?????????????????????.<br/>
                        </p>
                        <span className="sub-desc">??????, ?????? ??? ?????? ?????? ????????????<br />
                            ????????? ?????? ??????!</span>
                     </div>

                    
                    <div className="animation">
                        <img src="/images/bmart_rider.png" alt="?????????"/>            
                    </div>     
                </Content>
            </Section>
    </Container>
    )
}

export default Sixth;
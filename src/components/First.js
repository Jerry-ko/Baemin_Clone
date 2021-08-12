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
                    max-width: 100%;
                }
            }

@media screen and (min-width: 768px) {
    .header-text {
        top: 20%;
        left: 50px;
    }
}

`;
    

const First = () => {
    return (
        <Container>
            <Section>
                    <Content>         
                        <div className="header-text">
                            <h1 className="header-text1">
                                <img src="/images/main_text_01.png" alt="든든한 집밥 한상이 간절할 때"/>
                            </h1>
                        </div>
                        
                        <div className="app-download">
                            <img src="/images/btn_down.png" alt="배민앱 다운로드"/>
                        </div>

                   
                
                    </Content>
                </Section>
        </Container>
    )
}

export default First;
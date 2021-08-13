import styled from 'styled-components'

const Container = styled.div`
background: #ffffff;
`;

const Section = styled.div`
max-width: 1024px;
margin: 0 auto;
;`;

const Contents = styled.div`
padding: 5% 5%;

    .footer-title {

            .text-footer {
                width: 40%;

                    img {
                        max-width: 100%;
                        height: auto;
                        vertical-align: baseline;
                    }
            }
    }

    .family-link {
        overflow: hidden;
        margin: 10% 0 5%;
        width: 100%;

        li {
        display: inline-block;
        margin-right: 8px;
        width: auto;

        
            .second-line {
                margin-top: 3%;
            }

            a {
                display: block;

                    img {
                        max-width: 100%;
                        display: inline-block;
                        height: 1.5em;
                        vertical-align: baseline;
                    
                    }
            }

            
        }
    }

    .footer-sns-list {
        margin: 5% 0 5% -2%;

        li {
            display: inline-block;
            width: 100%;
            text-align: center;
            vertical-align: middle;
            margin-right: 2%;

            img{
                width: 10%;
            }

            &:first-child {
                margin-right: 0;
            }
        }
    }


@media screen and (min-width: 768px) {

    .footer-title {
        width: 40%;
        float: right;
    }

    .family-link {
        overflow: visible;
        width: 450px;
        margin-top: 0;
    }

    .footer-sns-list{
        margin-left: -1%;

        
    }
}
`;


const Footer = () => {
    return (
        <Container>
            <Section>

      
            <Contents>
                <div className="footer-title">
                    <h2 className="text-footer">
                        <img src="/images/slogan.png" alt="우리가 어떤 민족입니까"/>
                    </h2>
                </div>
                <div className="family-link">
                    <ul className="first-line">
                        <li>
                            <a href="https://www.woowahan.com/">
                                <img src="/images/link_woowahan.png" alt="우아한 형제들"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://ceo.baemin.com/">
                                <img src="/images/link_ceosite.png" alt="사장님광장"/>
                            </a>
                        </li>
                    </ul>
                    <ul className="second-line">
                        <li>
                            <a href="https://store.baemin.com/">
                                <img src="/images/link-store.png" alt="배민문방구"/>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.baeminriders.kr/connect/">
                                <img src="/images/link-rider.png" alt="배민커넥트"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className="footer-sns-list">
                    <li>
                        <a title="facebook" href="http://www.facebook.com/smartbaedal">
                            <img src="/images/icon_facebook_color.png" alt="페이스북"/>
                        </a>
                    </li>
                    <li>
                        <a title="instagram" href="https://www.instagram.com/baemin_official">
                            <img src="/images/icon_instagram_color.png" alt="인스타그램"/>
                        </a>
                    </li>
                    <li>
                        <a title="naver blog" href="https://blog.naver.com/smartbaedal">
                            <img src="/images/icon_blog_color.png" alt="네이버블로그"/>
                        </a>
                    </li>
                    <li>
                        <a title="youtube" href="https://www.youtube.com/user/smartbaedal2">
                            <img src="/images/icon_youtube_color.png" alt="유튜브"/>
                        </a>
                    </li>
                </ul>
            </Contents>
                </Section>
        </Container>
    )
}

export default Footer;
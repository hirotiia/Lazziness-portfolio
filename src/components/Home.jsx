import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Col,
    Row,
 } from 'reactstrap';

const sectionItems = [
    {
        title: '座右の銘: 「　Laziness　」',
        texts: [
            '「怠慢」と聞くと悪いイメージを持つ人は多いと思います。しかし、一般的に言われる怠慢とは少し違い、私はラリー・ウォールの三大美徳の一つである「怠慢であれ」という言葉に深く共感しています。全体の労力を減らすことに手間を惜しまない信念がこの言葉にはあります。結果として、多くの社員が今よりもっと労働時間が減り大切なひとや、趣味の時間に当てることができる。そんな幸福な世の中になってほしいという願いを込めてつけた名前です。'
        ],
        links:[{
            url: '/about',
            text: 'プロフィール',
        }]
    },
    {
        title: 'これまでの制作物',
        texts: [
            '主に、Webアプリを開発してみました。学習方法としては、動画コンテンツ、市販で売られている本、サイト(QiitaやMDNなど)で調べながら学習しています。今後はもっと実用的な技術を学ぶために外部の勉強会に積極的に参加していこうと思います。'
            ],
        links:[{
            url: '/portfolio',
            text: 'PORTFOLIO',
        }]
    },
    {
        title: 'お問い合わせ',
        texts: [
            '他にもtwitterを使って日々の学習の内容を発信しています。プログラミング学習中の方や駆け出しエンジニアの方と繋がりたいので、ぜひリンクから気軽にフォローお待ちしております。'
            ],
        links:[{
            url: '/contact',
            text: 'CONTACT',
        }]
    }
]

class Home extends React.Component {
    render() {
        return(
            <Container>
            {sectionItems.map((item, index)=> {
                return (
                    <Row className="text-center">
                        <Col className="mb-5" md={{ size: 8, offset: 2 }}>
                        <h2 className="mb-5">{item.title}</h2>
                        {item.texts.map((text, index) => {
                        return <p key={index}>{text}</p>
                        })}

                        {item.links.map((link, index) => {
                        return(
                            <Link to={link.url} key={index}>
                                {link.text}
                            </Link>
                        );
                    })}
                        </Col>
                    </Row>
                );
            })}
            </Container>
        );
    }
}


export default Home;
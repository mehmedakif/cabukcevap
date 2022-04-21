import Header from "./Header";
import { useTheme } from "../context/ThemeContext"
import WordCard from "../components/word-card/WordCard"
import { useEffect, useState } from "react";
import {Row, Col, Divider} from "antd"



function Container(){
    const {theme} = useTheme();

    function GetGrid (){
        var elements = []
        for (var i = 0; i < 17; i++){
            elements.push(
                <Col>
                    <WordCard _paragraph={"Üniversiteden mezun olmama aylar kala birçok işe başvuruyor ve birçok şirket ile mülakat gerçekleştiriyordum. Bu mülakatlarımın birinde eleştiri bombardımanına tutulduğumda çok üzülmüştüm fakat sonrasında bir noktada aydınlandım ve asıl üzülmesi gerekenin ben değil de 50'li yaşlarında olan mühendis ağabeyimin olması gerektiğini fark ettim. Özgeçmişimdeki projeler hakkında konuşmak yerine felsefeyi sevdiğimi belirtememe takılmış ve tepkisi şu şekilde olmuştu Felsefe seviyorsan ben sana tırlak derim. İnsanoğlunun diğer varlıklardan (en azından şuanda bildiklerimizden) farkı nedir? Düşünmek. Düşüncelerimizi iyi bir biçimde birleştirmek. Bu yeteneği, memeli canlılara has olan gelişmiş neokorteksimizin ekstra olarak yetenekli olmasına borçluyuz. Bu sayesinde temel ihtiyaçlarımızı düşünmekle kalmayıp; geleceğimizi, gezegenimizi, insanlığın faydasını da düşünebilme yetisine sahibiz. Düşünebildiklerimizin neden ve sonuçlarını da bir çatı altında topluyoruz: Bilim. Bilim ve mühendislik ile hastalıklar, ölümler, açlık, ekolojik dengedeki bozulmalar engellenebilmektedir. Bu nedenle bilim insanlarına ve mühendislere ciddi bir sorumluluk yüklenmektedir. Bilim insanı veya mühendis unvanı taşıyan kişiler kendi bilgeliğini insanlığa zarar verecek, geleceğimizi tehdit eden işler için kullanmamalıdır. Peki felsefenin anlamı nedir? Bilgelik sevgisi, düşünbilim, düşünce bilimi, gerçeğin kaynağı. Çiftçi, doktor, polis; toplumdaki görevi ne olursa olsun, insanlığın faydasını düşünmek bireylerin sorumluluklarından biri değil midir? Ya da en azından zarar vermekten kaçınmak zorunda değiller midir? Felsefeyi delilik göstergesi olarak tanımlamak, kişinin kendi düşünme yetisine bir hakaretidir. Beynimizin kendi kendini düşünmesi, nasıl düşündüğünü kavramaya çalışması ve daha önemlisi tüm bu bilginin kaynağını araması bizi biz yapan özelliğimizdir."} defaultSpeed={1000}/>
                </Col>
            );
        }
        return(
            <Row justify="space-around">
               {elements}
            </Row>
        )
    }


    return(
        <div className={`app ${theme}`}>
            <Header/>
            <Divider/>
            {GetGrid()}
        </div> 
    )
}

export default Container;
import React, { Component } from "react";
import './SpaceBlog.css';
import CarouselSpaceBlog from "./CarouselSpaceBlog/CarouselSpaceBlog";
import SpaceCards from "./SpaceCards/SpaceCards";

let cards = [
    {
      id: 0,
      branch: 'кариера', 
      title: 'Deep Dive семинари кои ќе овозможуваат брз кариерен напредок', 
      text: 'Нов продукт од Brainster во Brainster Space. Интензивни дводневни семинари кои ќе ти помогнат од Mid Level брзо да го постигнеш твојот Senior напредок.'
    },
    {
      id: 1,
      branch: 'кариера', 
      title: 'Ако не те бива за програмирање дали можеш да имаш кариера во Tech?', 
      text: 'Tech индустијата е најпосакувана област за работа, заради големата побарувачка, секојдневните промени и големиот инкам.'
    },
    {
      id: 2,
      branch: 'технологија', 
      title: 'Што значи денес, твојата канцеларија да е smart?', 
      text: 'На отворањето на Brainster Space, добиваме супер подарок - smart home уред. Голем дел од нас беа збунети за тоа што се можеме да добиеме со него.'
    },
    {
      id: 3,
      branch: 'маркетинг', 
      title: 'Како до кариера во Data Science?', 
      text: 'Од искуство на студентите на нашата академија, решивме да ви помогнеме со неколку tips за потребните skills за да започнете да работите Data Science.'
    },
    {
      id: 4,
      branch: 'маркетинг', 
      title: 'Интервју со Николај Ванчев, арѕ директор во Tank, Estonia. #SpaceFamily', 
      text: 'Николај Ванчев е Creative director во TANK (Естонија). Неговата успешна 12 годишна кариера како арт директор тој ја гради во реномирани агенции...'
    },
    {
      id: 5,
      branch: 'дизајн', 
      title: 'Зошто дизајн, накратко со Дијана Димитриевска #SpaceFamily', 
      text: 'Интервју си Дијана ДИмитриевска, графички дизајнер, DJ и инструктор на Академијата за графички дизајн во Brainster.'
    },
    {
      id: 6,
      branch: 'дизајн', 
      title: 'Што е потребно за добар мобилен дизајн', 
      text: 'UX/UI дизајнерите се дигитални продукт дизајнери. Нивната задача е да создадат корисен, релевантен и едноставен за користиците продукт.'
    },
    {
      id: 7,
      branch: 'impact', 
      title: 'Македонско-американската компанија Upshift доби инвестиција од 3.7 милиони...', 
      text: 'Он-дименд платформата за работа се шири со нова рунда финансирање предводена од Recruit која е најголема HR Tech компанија во светот...'
    },
    {
      id: 8,
      branch: 'impact', 
      title: 'Локалната апликација Challenger и нејзиниот импакт. #SpaceFamily', 
      text: 'Мисијата на Challenger е да создава општествено одговорна заедница која создава позитивна промена преку развивање на подобри индивидуални навики...'
    },

]

class SpaceBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCardsCarousel: [],
      filteredCards: []
    };
  }

  componentDidMount(){
    // if(this.props.match.params.category)
    if(this.props.match.params.category === 'all'){
      this.setState({
        ...this.state,
        filteredCards: cards
      })
    } else {
      let filtered =  cards.filter(el=> el.branch === this.props.match.params.category.toLowerCase().replace('_', ' '))
      this.setState({
        ...this.state,
        filteredCards: filtered
      })
    }
    this.setState({
      allCardsCarousel: cards
    })
  }

  render() {
    return (
    <div className="spaceBlog">
      <CarouselSpaceBlog cards={this.state.allCardsCarousel}/>
      <SpaceCards cards={this.state.filteredCards}/>
    </div>
    );
  }
}

export default SpaceBlog;

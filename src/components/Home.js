import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Hero from './Hero';
import ListWork from './ListWork';

class Home extends Component {

  componentWillMount() {
    const hero = {
      heroTitle: 'A Product Designer and Front-end Developer who loves creating a better interaction in every design iteration.',
      heroTagline: 'I enjoy collaborating with engineers, designers, data scientists and people with different backgrounds to work on various projects. Seeing the interaction between the users and the product always inspires me to build an impactful products.',
    };

    const lwContent = [
      {
        workTitle: 'Item Replacement',
        workDesc: 'As a team, we created the item replacement as a new feature in 2017. The objective of this project is to reduce the order cancellation rate. I was involved in developing the UI component with HTML5, CSS3, and React based on our flow and wireframes. After being launched for one month, the order cancellation rate is decreased by 25% and the rate of new order is increased up to 40%.',
        workRoute: '/itemreplacement',
        workUrl: {
          url: 'https://www.tokopedia.com/peluang',
          text: 'Visit Site',
        },
        workImage: '/build/f23ea378de5dc8958bd1d599ad8aea54.jpg',
      },
      {
        workTitle: 'Free return shipping microsites',
        workDesc: 'Free Returns is recently introduced as Tokopedia’s new feature. I was involved in developing the UI components using HTML5, CSS3, and Javascript based on the information architecture. After being launched for one week, the project successfully receives 60,000 sellers subscribe to this new feature.',
        workRoute: '/frs',
        workUrl: {
          url: 'https://www.tokopedia.com/free-returns',
          text: 'Visit Site',
        },
        workImage: '/build/0f4cc924390827f7d8737b6ca42ec8cc.png',
      },
      {
        workTitle: 'Topchat: Tokopedia Chat Feature',
        workRoute: '/topchat',
        workDesc: 'Topchat provides new functionalities that allow a better interaction between Tokopedia’s sellers and buyers inside a messaging platform.',
        workUrl: {
          url: 'https://www.tokopedia.com/inbox-chat-new.pl',
          text: 'Visit Site',
        },
        workImage: '/build/c8a751ccfe3426017eb075c6fae3bddf.png',
      },
    ];

    this.setState({
      workContent: lwContent,
      heroContent: hero,
    });
  }
  render() {
    const transitionFadeIn = {
      transitionName: 'fade',
      transitionEnterTimeout: 10000,
      transitionLeaveTimeout: 10000,
    };
    const { workContent, heroContent } = this.state;

    return (
      <div>
        <Hero data={heroContent} />
        {
          workContent.map((item, index) => (
            <ListWork
              key={index}
              isRead
              transitionAnimation={transitionFadeIn}
              listWorkContent={item}
            />))
        }

      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Hero from './Hero';
import ListWork from './ListWork';

class Home extends Component {

  componentWillMount() {
    const hero = {
      heroTitle: 'A Product Designer and Front-end Developer who loves to build a good interaction in every design iteration.',
      heroTagline: 'I enjoy collaborating with engineers, designers, data scientists and people with different backgrounds to work on various projects. Seeing the interaction between the users and the product always inspires me to build an impactful products.',
    };

    const lwContent = [
      {
        workTitle: 'Free return shipping microsites',
        workDesc: 'As a team, we created the microsites for Tokopedia’s new feature Free Returns. This project’s objective is to collect sellers subscriptions. I was involved in creating the UI component with HTML5, CSS3, and Javascipt based on information architecture through the deployment with engineers. After being launched for one week, the project receives 60,000 sellers across the platform subscribed to this new feature.',
        workUrl: {
          url: 'https://www.tokopedia.com/free-returns',
          text: 'Visit Site',
        },
        workImage: '/build/0f4cc924390827f7d8737b6ca42ec8cc.png',
      },
      {
        workTitle: 'Topchat: Tokopedia Chat Feature',
        workDesc: 'Creating new chating feature that has an objective to improve the experience of chatting flow and the interaction between merchant and buyer inside Tokopedia platform.',
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

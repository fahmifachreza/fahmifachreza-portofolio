
import React, { Component } from 'react';
import { object, bool } from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import LazyLoad from 'react-lazyload';


class ListWork extends Component {

  static defaultProps = {
    transitionAnimation: object,
    isRead: false,
    listWorkContent: object,
  }

  static propTypes = {
    transitionAnimation: object,
    isRead: bool,
    listWorkContent: object,
  }

  render() {
    const { isRead } = this.props;
    const item = this.props.listWorkContent;
    return (
      <section className="container work" id="work">
        <div className="clearfix mb4" id="free-returns">
          <div className="col sm-col-12 md-col-7 lg-col-7">
            <div className="work-desc-wrap">
              <h2>{item.workTitle}</h2>
              <div className="keywords clearfix">
                <div>
                  Technologies:
                </div>
                <div>
                  {item.keyWords}
                </div>
              </div>
              <p className="work-desc">
                {item.workDesc}
              </p>
              <a href={item.workRoute}>More details</a>
            </div>
          </div>
          <div className="col sm-col-12 md-col-5 lg-col-5">
            <LazyLoad throttle={200} key={0} height={200}>
              <CSSTransitionGroup {...this.props.transitionAnimation}>
                {
                 isRead && <img src={item.workImage} key={0} className="work-img" alt="" />
                }
              </CSSTransitionGroup>
            </LazyLoad>
          </div>
        </div>
      </section>
    );
  }
}

export default ListWork;


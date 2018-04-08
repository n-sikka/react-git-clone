import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';

import HomeSectionNav from './partials/home-section-nav';
import HomeSectionOverview from './partials/home-section-overview';

const Home = props => (
    <div class="row m-0">
      <div class="col-md-3 user-container text-left">
        <img src="http://helo.life/assets/modules/responder/themes/fourzero/app/img/user/08.jpg" class="img-fluid user-img rounded" alt=""/>
        <h2 class="mb-0 mt-3 user-name">Amber Chase</h2>
        <p class="text-muted user-handler">a-chase</p>

        <div class="user-bio">
          <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <button class="btn btn-default btn-user-edit btn-block mx-0 border bg-white">Edit bio</button>

          <hr/>

          <div class="user-info">
              @<a class="text-bold" href="/">homelike</a>
              <p>Berlin, Germany</p>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <HomeSectionNav></HomeSectionNav>
        <HomeSectionOverview></HomeSectionOverview>
      </div>
    </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

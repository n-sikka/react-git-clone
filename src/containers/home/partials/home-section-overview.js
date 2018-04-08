import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeSectionRepoItem from './home-section-repo-item';

const repoListItems = [1,2,3,4].map((numbers) =>
    <div class="col-md-6 mb-2 px-1">
        <HomeSectionRepoItem></HomeSectionRepoItem>
    </div>
);

const HomeSectionOverview = props => (
    <div class="home-section-overview-container mt-4">
       <div class="row m-0">
            <div class="col-md-6 px-2 my-1 text-left">
                <p class="m-0">Pinned Repository</p>
            </div>
            <div class="col-md-6 px-2 my-1 text-right">
                <a>
                    <i className="fas fa-user"></i>
                    Customize your pinned repositories
                </a>
            </div>
       </div>

       <div class="row m-0 mt-2">
            {repoListItems}
       </div>
    </div>
);

export default connect()(HomeSectionOverview);

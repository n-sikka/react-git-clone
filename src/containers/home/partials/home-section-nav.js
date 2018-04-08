import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const HomeSectionNav = props => (
    <div class="home-section-nav-container">
        <ul class="nav nav-pills border-bottom home-sections-nav">
            <li class="nav-item">
                <a class="nav-link">Overview</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active">
                Repository
                <span class="badge badge-pill badge-secondary ml-1">6</span>
                </a>
            </li>
            <li class="nav-item disabled">
                <a class="nav-link">Stars</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Followers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Following</a>
            </li>
        </ul>
    </div>
);

export default connect()(HomeSectionNav);

/**
 *
 * App
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { Switch, Route } from 'react-router-dom';
import localforage from 'localforage';
import WoVueHomePage from 'containers/WoVueHomePage/Loadable';
import Disciplines from 'containers/Disciplines/Loadable';
import DisciplinesDetails from 'containers/DisciplinesDetails/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Flaw from 'containers/Flaw/Loadable';
import Merits from 'containers/Merits/Loadable';
import ClanPage from 'containers/ClanPage/Loadable';
import Attribute from 'containers/Attributes/Loadable';
import Backgrounds from 'containers/Backgrounds/Loadable';
import Skills from 'containers/Skills/Loadable';
import Techniques from 'containers/Techniques/Loadable';
import TechniquesDetails from 'containers/TechniquesDetails/Loadable';
import Rituals from 'containers/Rituals/Loadable';
import FlawsDetails from 'containers/FlawsDetails/Loadable';
import MeritsDetails from 'containers/MeritsDetails/Loadable';
import RitualsListing from 'containers/RitualsListing/Loadable';
import QuickStart from 'containers/QuickStart/Loadable';
import Header from 'components/Header_1';
import Footer from 'components/Footer_1';

import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getData, disciplineData } from './actions';

export function App({ app, onRequestData, onRequestDisciplineData }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  const {
    appData: { hasMore: disciplineHasMore },
  } = app;

  useEffect(() => {
    if (disciplineHasMore) {
      onRequestData();
      onRequestDisciplineData();
    }
  });

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={WoVueHomePage} />
        <Route
          exact
          path="/WoDVue/monsters/vampire/Disciplines/"
          component={DisciplinesDetails}
        />
        <Route
          path="/WoDVue/monsters/vampire/Disciplines/:id"
          component={DisciplinesDetails}
        />
        <Route exact path="/WoDVue/monsters/vampire/Flaws" component={Flaw} />
        <Route
          path="/WoDVue/monsters/vampire/Flaws/:id"
          component={FlawsDetails}
        />
        <Route
          exact
          path="/WoDVue/monsters/vampire/Merits"
          component={Merits}
        />
        <Route
          exact
          path="/WoDVue/monsters/vampire/Rituals"
          component={RitualsListing}
        />
        <Route
          path="/WoDVue/monsters/vampire/Rituals/:id"
          component={Rituals}
        />
        <Route
          path="/WoDVue/monsters/vampire/Merits/:id"
          component={MeritsDetails}
        />
        <Route
          exact
          path="/WoDVue/monsters/vampire/Attributes"
          component={Attribute}
        />
        <Route
          exact
          path="/WoDVue/monsters/vampire/Backgrounds"
          component={Backgrounds}
        />
        <Route
          exact
          path="/WoDVue/monsters/vampire/Skills"
          component={Skills}
        />
        <Route
          exact
          path="/WoDVue/monsters/vampire/Techniques"
          component={Techniques}
        />
        <Route
          path="/WoDVue/monsters/vampire/Techniques/:id"
          component={TechniquesDetails}
        />
        <Route
          exact
          path="/WoDVue/monsters/vampire/clan/:id"
          component={ClanPage}
        />
        <Route
          exact
          path="/WoDVue/monsters/vampire/clan/"
          component={ClanPage}
        />
        <Route exact path="/QuickStart" component={QuickStart} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

App.propTypes = {
  ...App,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRequestData: () => dispatch(getData()),
    onRequestDisciplineData: () => dispatch(disciplineData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);

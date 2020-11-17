import React from 'react';
import { Route } from 'react-router-dom';
import LogInContainer from './sessions/log_in_container';
import Modal from '../components/modal/modal';

const App = () => (
  <>
    <Modal />
    <section className="nav-bar">
      <LogInContainer />
    </section>
  </>
)

export default App;
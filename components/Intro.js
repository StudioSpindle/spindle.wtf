import Logo from '../components/Logo';
import React from 'react';

const Intro = () => (
  <section>
    <Logo width={60} fill="var(--theme-color-primary)" />
    <h1 className="title type--inverted">
      new <span className="theme-text-color-primary">opportunities</span>
      <br />
      require original{' '}
      <span className="theme-text-color-primary">technology</span>
      <br />
      give <span className="theme-text-color-primary">it</span> a spin
    </h1>
    <style jsx>{`
      .theme-text-color-primary {
        color: var(--theme-color-primary);
      }
    `}</style>
  </section>
);

export default Intro;

import Logo from "../components/Logo";
import React from "react";

const Intro = () => (
    <div>
      <p className="type--inverted">An innovative idea is found by making a new connection. A link that connects two dots that haven’t been connected before. Validate simple, move quick.</p>
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            padding: 0 var(--theme-scale-section-m);
          }
        }
        @media (min-width: 768px) {
          div {
            padding: 0 var(--theme-scale-section-l);
          }
        }
      `}</style>
    </div>
);

export default Intro;

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Support Me',
    Svg: require('@site/static/img/customizable.svg').default,
    description: (
      <>
        Give me a star at here <a href='https://github.com/ysh199882'>github</a>
      </>
    ),
  },
  {
    title: 'About Me',
    Svg: require('@site/static/img/simple.svg').default,
    description: (
      <>
        React front end Engineer
      </>
    ),
  },
  {
    title: 'Contact Me',
    Svg: require('@site/static/img/light.svg').default,
    description: (
      <>
        Wechat:Yongbi1217
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

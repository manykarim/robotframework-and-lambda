import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Set up your environment',
    Svg: require('@site/static/img/Setup-pana.svg').default,
    description: (
      <>
        Set up AWS SAM CLI on your system.
      </>
    ),
  },
  {
    title: 'Define your Lambda functions and resources',
    Svg: require('@site/static/img/Code_typing-pana.svg').default,
    description: (
      <>
        Create your Lambda functions and resources in AWS SAM.
      </>
    ),
  },
  {
    title: 'Build And Deploy to AWS',
    Svg: require('@site/static/img/Launching-pana.svg').default,
    description: (
      <>
        Build and deploy your application to AWS with <b>sam build</b> and <b>sam deploy</b>
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

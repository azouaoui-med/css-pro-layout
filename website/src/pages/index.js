import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: <>CSS Pro layout was created to help building page layouts quickly and easily</>,
  },
  {
    title: 'Flexible',
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: <>You can build different layout structures with one single css code </>,
  },
  {
    title: 'Customizable',
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>We provide a set of SCSS and Less variables which can be used for customization</>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)} style={{ paddingTop: 40 }}>
      {/* {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )} */}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container" style={{ paddingTop: 50, paddingBottom: 50, color: '#fff' }}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle" style={{ marginBottom: 50 }}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
          {/* <div style={{ opacity: 0.8, marginTop: 20 }}>Current version : 1.0.0-alpha.1</div> */}
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

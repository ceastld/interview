import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '传统机器学习',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        涵盖逻辑回归、KNN、K-means等经典算法，
        从基础理论到实际应用，全面掌握机器学习核心概念。
      </>
    ),
  },
  {
    title: '深度学习',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        深入理解CNN、RNN、LSTM、Dropout、强化学习等
        深度学习技术，掌握神经网络的设计与优化。
      </>
    ),
  },
  {
    title: '前沿技术',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        紧跟AI发展趋势，涵盖Transformer、Diffusion等
        最新技术，为面试和职业发展做好准备。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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

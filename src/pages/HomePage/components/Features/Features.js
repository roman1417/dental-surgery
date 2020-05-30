import React, { useMemo } from 'react';
import { Tween, Reveal } from 'react-gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import featureList from 'assets/featureList';
import {
  FeaturesWrapper,
  FeaturesTitle,
  FeatureList,
  Feature,
  FeatureTitle,
  FeatureIcon,
} from './Features.css';

const Features = () => {

  const features = useMemo(() => (
    featureList.map(feature => (
      <Feature key={feature.title} >
        <Reveal trigger={<Feature />} threshold={.9}>
          <Tween
            from={{ opacity: 0, transform: 'scale(0)' }}
            duration={.5}
            ease='power4.out'>
            <FeatureTitle >
              <FeatureIcon >
                <FontAwesomeIcon icon={faCheckCircle} />
              </FeatureIcon>
              {feature.title}
            </FeatureTitle>
            <p >{feature.description}</p>
          </Tween>
        </Reveal>
      </Feature>
    ))
  ), [])

  return (
    <FeaturesWrapper>
      <FeaturesTitle>Nasze atuty</FeaturesTitle>
      <FeatureList>{features}</FeatureList>
    </FeaturesWrapper>
  );
}

export default React.memo(Features);
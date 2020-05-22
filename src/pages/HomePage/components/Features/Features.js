import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import featureList from 'utils/featureList';
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
        <FeatureTitle >
          <FeatureIcon >
            <FontAwesomeIcon icon={faCheckCircle} />
          </FeatureIcon>
          {feature.title}
        </FeatureTitle>
        <p >{feature.description}</p>
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
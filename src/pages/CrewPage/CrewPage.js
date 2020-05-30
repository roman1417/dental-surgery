import React, { useMemo } from 'react';
import { Tween, Reveal } from 'react-gsap';

import crew from 'assets/crew';
import { Separator } from 'components'
import {
  CrewPageWrapper,
  CrewPageTitle,
  CrewCard,
  CardImageWrapper,
  CardImage,
  CardDescription,
  CardTitle,
} from './CrewPage.css';

const CrewPage = () => {

  const crewList = useMemo(() => (
    crew.map(({ name, title, description, img }) => (
      <CrewCard key={name}>
        <Separator />
        <Reveal trigger={<CardImageWrapper />} threshold={.7}>
          <Tween
            from={{ transform: 'scale(0.9)' }}
            duration={2}
            ease='power4.out'>
            <CardImageWrapper>
              <CardImage src={img} alt={name} />
            </CardImageWrapper>
          </Tween>
        </Reveal>
        <CardDescription>
          <Reveal trigger={<CardDescription />} threshold={.75}>
            <Tween from={{ x: '10vw' }} duration={2} ease='power4.out'>
              <h3>{name}</h3>
            </Tween>
            <Tween from={{ x: '-10vw' }} duration={2} ease='power4.out'>
              <CardTitle>{title}</CardTitle>
            </Tween>
            <Tween from={{ x: '10vw' }} duration={2} ease='power4.out'>
              <p>{description}</p>
            </Tween>
          </Reveal>
        </CardDescription>
      </CrewCard>
    ))
  ), [])

  return (
    <CrewPageWrapper>
      <CrewPageTitle>Nasz zespół</CrewPageTitle>
      {crewList}
    </CrewPageWrapper>
  );
}

export default React.memo(CrewPage);
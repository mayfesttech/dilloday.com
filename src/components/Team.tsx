'use client';

import styled from 'styled-components';
import GradientDivider from './GradientDivider';
import { Section, mobile } from '@/components';
import { motion } from 'framer-motion';
import TeamsGrid from './TeamsGrid';

const Container = styled.div`
  margin: 64px 0;
`;

const Heading = styled(motion.div)`
  height: 480px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TitleContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 128px;
  background: url(/team-background.jpg);
  background-size: 100%;
  background-position: 50% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgba(216, 180, 254, 0.3);
  text-align: center;

  ${mobile} {
    font-size: 64px;
  }
`;

const Text = styled(motion.p)`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  max-width: 800px;
`;

const TextHighlight = styled.span`
  color: #d8b4fe;
  font-weight: 500;
`;

const variants = {
  initial: {},
  animate: {
    transition: {
      delay: 1,
      delayChildren: 0.5,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, scale: 5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.0],
      delayChildren: 0.5,
    },
  },
};

const grandchildVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 0.8,
    y: 0,
  },
};

export default function Team() {
  return (
    <Container>
      <Heading
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 'all' }}
      >
        <GradientDivider top height={32} />
        <Image
          src="/team-background.jpg"
          alt="Mayfest Productions Teams Background"
        />
        <GradientDivider bottom height={128} />
        <TitleContainer variants={childVariants}>
          <Title>Meet Mayfest</Title>
          <Text variants={grandchildVariants}>
            The organization is comprised of{' '}
            <TextHighlight>10 committees</TextHighlight>, each with its own core
            responsibilities and cross-committee collaborations that translate
            directly to the success of our events.
          </Text>
        </TitleContainer>
      </Heading>
      <Section>
        <TeamsGrid />
      </Section>
    </Container>
  );
}

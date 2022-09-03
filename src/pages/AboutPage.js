import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero  title='about'/>
      <Wrapper className=' page section section-center'>
        <img src={aboutImg} alt ='nice desk' />
        <article>
          <div className='title'>
            <h2>Our story</h2>
            <div className='underline'></div>
          </div>
          <p> Shankar is preparing well and going good.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique. Sit amet facilisis magna etiam tempor orci eu. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Volutpat odio facilisis mauris sit amet massa vitae. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Bibendum neque egestas congue quisque egestas diam in. At auctor urna nunc id cursus m.</p>
        </article>

      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
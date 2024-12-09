import { type Component } from 'solid-js'
import Section from '../Section'

const Hero: Component = () => (
  <Section id="hero" class="flex justify-center items-center text-4xl lg:text-6xl uppercase">
    <div class="container">
      <span class="font-bold leading-snug">
        Hi. I'm
        {' '}
        <span class="text-indigo-400">
          Pedro
        </span>
        . Let's work together!
      </span>
    </div>
  </Section>
)

export default Hero

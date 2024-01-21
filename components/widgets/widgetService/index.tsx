'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import service1 from './assets/service1.webp'
import service2 from './assets/service2.webp'
import service3 from './assets/service3.webp'
import Image from "next/image"

export default function WidgetService() {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <section>
      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.position)}>
          <Image
            {...stylex.props(s.image)}
            src={service1}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.bg)}>
          </div>
          <div {...stylex.props(s.text)}>
            <p {...stylex.props(s.textContainer)}>Doing Business</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>

        <div {...stylex.props(s.position)}>
          <Image
            {...stylex.props(s.image)}
            src={service2}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.bg)}>
          </div>
          <div {...stylex.props(s.text)}>
            <p {...stylex.props(s.textContainer)}>Increasing Efficiency</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>

        <div {...stylex.props(s.position)}>
          <Image
            {...stylex.props(s.image)}
            src={service3}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.bg)}>
          </div>
          <div {...stylex.props(s.text)}>
            <p {...stylex.props(s.textContainer)}>Control</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const fadeIn = stylex.keyframes({
  '0%': { transform: 'scale(1, 1)' },
  '50%': { transform: 'scale(1.05, 1.05)' },
  '10%': { transform: 'scale(1, 1)' },
})


const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    gap: spacing.md,
    margin: {
      default: `${spacing.xxl} auto`,
      '@media (max-width: 900px)': `${spacing.xl} auto`
    },
  },
  position: {
    position: 'relative',
    animationName: {
      default: null,
      ':hover': fadeIn
    },
    animationDuration: '1s',
    animationFillMode: 'forwards',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-in-out',
    transformOrigin: 'center center',
    overflow: 'hidden'
  },
  bg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    cursor: 'pointer',
    width: '100%',
    height: '100px',

    backgroundColor: colors.black,
    opacity: .5,
    zIndex: 100
  },
  text: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    color: colors.white,
    width: '100%',
    textAlign: 'center',
    zIndex: 103
  },
  textContainer: {
    fontSize: text.h4,
    color: colors.white
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

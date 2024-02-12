'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../app/globalTokens.stylex"
import Image from "next/image"
import musicP from './assets/solar.webp'
import WidgetImageAbout from "../widgets/widgetImageAbout"
// import ArrowDouble from "../Assets/Icons/ArrowDouble"

export default function AboutComponent() {

  return (
    <>
      <WidgetImageAbout title="About Us" />

      <div {...stylex.props(s.aboutUsTitle)}>
        <h3>Our Core Values</h3>
      </div>
      <div {...stylex.props(s.intro)}>
        <div>
          <h3 {...stylex.props(s.subTitle)}>About Us</h3>
          <p>Founded in 2022 for music enthusiasts and creators we believe in the transformative power of sound and the ability of music to connect and inspire. Our platform is a vibrant community where passion meets innovation, providing a space for musicians, producers, and music lovers to explore, create, and elevate their craft.</p>
        </div>
      </div>
      <div {...stylex.props(s.aboutUs)}>
        <div>
          <h3 {...stylex.props(s.subTitle)}>Our Mission</h3>
          <p>Our mission is to bring artists and clients together for extraordinary musical experiences, creating memories that resonate for a lifetime. We are committed to providing unparalleled support for artists in tours and recording, offering organizational assistance in legal and financial matters, and curating exceptional events that bring the joy of music to various settings.</p>
        </div>
        <div>
          <h3 {...stylex.props(s.subTitle)}>Our Vision</h3>
          <p>We envisions a world where every individual, regardless of their musical background, has the tools, support, and platform to unleash their creative potential. We aspire to be the go-to destination for musicians seeking top-notch production services, financial guidance, legal support, and event organization.</p>
        </div>
      </div>
    </>
  )
}


const s = stylex.create({

  subTitle: {
    marginBottom: spacing.sm,
    textAlign: {
      default: 'center',
      '@media (max-width: 900px)': 'left'
    }
  },
  intro: {
    display: 'flex'
  },
  title: {
    position: 'absolute',
    left: '50%',
    top: '25%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    // height: '400px',
    fontSize: text.h5,
    textTransform: 'uppercase',
    color: colors.white
  },
  aboutUsTitle: {
    display: 'flex',
    justifyContent: 'center',
    margin: '24px 0',
    fontSize: text.h4
  },
  aboutUs: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr',
      '@media (max-width: 900px)': '1fr'
    },
    margin: '24px 0',
    gap: spacing.sm
  },
})
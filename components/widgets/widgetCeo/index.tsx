'use client'
import * as stylex from "@stylexjs/stylex"
import { spacing } from "../../../app/globalTokens.stylex"
import ceo from './assets/widget-ceo1.webp'
import Image from "next/image"

export default function WidgetCeo() {

  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.left)}>
        <p>Established in 2022, MPS Music Production Services stands as a beacon of innovation in the realm of music production, dedicated to empowering musicians and producers of all levels to craft exceptional tracks that resonate for a lifetime.</p>
        <div {...stylex.props(s.leftBottom)}>
          {/* <div>
            <Image
              {...stylex.props(s.image)}
              src={ceo}
              alt="alt"
              width={0}
              height={0}
            />
          </div> */}
          {/* <div>
            <p {...stylex.props(s.name)}>Roger Waters</p>
            <p>Director</p>
          </div> */}
        </div>
      </div>

      <div>
        <span {...stylex.props(s.span)}>E</span>
        <p>mbrace the art of sound with us, and let your music speak volumes in terms of quality and innovation.</p>
        <br /><p> Join us on a journey where your musical vision transforms into an immersive sonic experience.</p>
      </div>

      <div>
        <p> Our mission is simple but profound: we bring artists and clients together for spectacular experiences, creating memories that transcend the ordinary.</p><br />
        <p>Embark on a journey of premium audio craftsmanship!</p>
      </div>

    </section >
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1.7fr 1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    gap: spacing.xs,
    margin: `${spacing.xl} auto ${spacing.xxxl}`,
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  leftBottom: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.sm
  },
  image: {
    borderRadius: "50%",
    width: 78,
    height: 78,
  },
  name: {
    fontWeight: 'bold'
  },
  span: {
    fontSize: 42,
    float: 'left',
    lineHeight: 1,
    paddingRight: spacing.sm
  }
})

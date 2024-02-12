import * as stylex from "@stylexjs/stylex"
import { colors, globalTokens, spacing, text } from "../../../app/globalTokens.stylex"
import blog1 from './images/close-mic.webp'
import blog2 from './images/grid1.webp'
import blog3 from './images/grid2.webp'
import Image from "next/image"
import billboard from '../../billboard/assets/musicP.webp'
export default function WidgetImageGrid() {

  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.firstLeft)}>
        <div>
          <Image
            {...stylex.props(s.firstImage)}
            src={blog1}
            alt=""
            width={0}
            height={0}
          />
        </div>
        <div {...stylex.props(s.firstRight)}>
          <div>
            <Image
              {...stylex.props(s.secondImage)}
              src={blog2}
              alt=""
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              {...stylex.props(s.secondImage)}
              src={blog3}
              alt=""
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>

      <div>
        <Image
          {...stylex.props(s.billboard)}
          src={billboard}
          alt=""
          width={0}
          height={0}
          {...stylex.props(s.billboard)}
        />
      </div>
    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr',
      '@media (max-width: 900px)': '1fr'
    },
    margin: {
      default: `${spacing.xxl} auto`,
      '@media (max-width: 900px)': `${spacing.xl} auto`
    },
    maxWidth: globalTokens.maxWidth,
    overflow: 'hidden'
  },
  firstLeft: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    maxWidth: '100%',
    objectFit: 'cover'

  },
  firstRight: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
  },
  firstImage: {
    display: 'block',
    height: '100%',
    maxWidth: '100%',
    objectFit: 'cover'
  },
  secondImage: {
    height: '100%',
    maxWidth: '100%',
    objectFit: 'cover'

  },
  billboard: {
    height: '100%',
    maxWidth: '100%',
    objectFit: 'cover'
  }
})

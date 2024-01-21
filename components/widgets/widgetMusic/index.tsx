'use client'
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../../app/globalTokens.stylex"

import Arrow from "@/components/Assets/Icons/Arrow"
import ArrowDownSvg from "@/components/Assets/Icons/ArrowDownSvg";
import Twitter from "@/components/Assets/Icons/Twitter";
import TwitterAlone from "@/components/Assets/Icons/TwitterAlone";
import InstagramAlone from "@/components/Assets/Icons/InstagramAlone";
import SportifyAlone from "@/components/Assets/Icons/SpotifyAlone";
import YoutubeAlone from "@/components/Assets/Icons/YoutubeAlone";
import SoundCloudAlone from "@/components/Assets/Icons/SoundCloudAlone";
import DeezerAlone from "@/components/Assets/Icons/DeezerAlone";


export default function WidgetMusic() {

  return (
    <section>
      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.itemBlack)}>
          <TwitterAlone />
        </div>

        <div {...stylex.props(s.itemLight)}>
          <InstagramAlone />
        </div>

        <div {...stylex.props(s.itemBlack)}>
          <SportifyAlone />
        </div>

        <div {...stylex.props(s.itemLight)}>
          <YoutubeAlone />
        </div>

        <div {...stylex.props(s.itemBlack)}>
          <SoundCloudAlone />
        </div>

        <div {...stylex.props(s.itemLight)}>
          <DeezerAlone />
        </div>

      </div>

    </section>
  )
}


const s = stylex.create({
  container: {
    display: 'grid',
    maxWidth: $.maxWidth,
    gridTemplateColumns: {
      default: 'repeat(6, 1fr)',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    margin: {
      default: `${spacing.xl} auto 0`,
      '@media (max-width: 900px)': `${spacing.xl} auto 0`
    },
  },
  itemBlack: {
    backgroundColor: colors.black,
    width: '100%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    opacity: {
      default: null,
      ':hover': .4
    }
  },
  itemLight: {
    backgroundColor: colors.darkGray,
    width: '100%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    opacity: {
      default: null,
      ':hover': .4
    }
  },
})

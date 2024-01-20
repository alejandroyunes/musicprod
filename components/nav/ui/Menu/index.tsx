'use-client'

import stylex from '@stylexjs/stylex'
import { globalTokens as $, colors, spacing, text } from './../../../../app/globalTokens.stylex'
import Link from 'next/link'
import Facebook from '@/components/Assets/Icons/Facebook'
import FacebookCircle from '@/components/Assets/Icons/FacebookCircle'
import TwitterCircle from '@/components/Assets/Icons/TwitterCircle'
import InstagramCircle from '@/components/Assets/Icons/InstagramCircle'

export default function Menu() {

  return (
    <div {...stylex.props(s.main)}>
      <ul {...stylex.props(s.list)}>
        <Link href="/" {...stylex.props(s.link)}>
          <li {...stylex.props(s.item)}>
            <span {...stylex.props(s.span)}><FacebookCircle /></span>
          </li>
        </Link>
        <Link href="/" {...stylex.props(s.link)}>
          <li {...stylex.props(s.item)}>
            <span {...stylex.props(s.span)}><TwitterCircle /></span>
          </li>
        </Link>
        <Link href="/" {...stylex.props(s.link)}>
          <li {...stylex.props(s.item)}>
            <span {...stylex.props(s.span)}><InstagramCircle /></span>
          </li>
        </Link>
      </ul>
    </div >
  )
}


const s = stylex.create({
  main: {
    display: 'flex',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none'
  },
  link: {
    textDecoration: 'none'
  },
  item: {
    position: 'relative',
    padding: `0 ${spacing.xs}`,
  },
  span: {
    zIndex: 200,
    cursor: 'pointer',
  },
})

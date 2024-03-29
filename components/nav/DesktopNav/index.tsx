"use client"
import * as stylex from "@stylexjs/stylex"
import Image from "next/image"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import Menu from "../ui/Menu"
import Social from "../ui/SocialMenu"
import Link from "next/link"
import logo from '../../../components/Assets/images/logo-mps2.png'

export function DesktopNav() {

  return (
    <nav {...stylex.props(s.container)}>

      <div  {...stylex.props(s.left)}>
        <Menu />
      </div>

      <div {...stylex.props(s.middle)}>
        <Link href="/" {...stylex.props(s.link)}>
          <Image
            {...stylex.props(s.logo)}
            src={logo}
            width={0}
            height={0}
            alt="logo mps"
          />
        </Link>
      </div>

      <div {...stylex.props(s.right)}>
        <Social />
      </div>
    </nav>
  )
}

const s = stylex.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.md
  },
  logo: {
    maxHeight: 69,
    maxWidth: 76
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  capital: {
    fontSize: text.h3,
  },
  invest: {
    marginRight: spacing.md,
    fontSize: text.h3,
    color: colors.primary,
    fontWeight: 'bold',
  },
  left: {
    display: {
      default: "flex",
      '@media (max-width: 700px)': 'none'
    },
    alignItems: "center",
  },
  middle: {

  },
  right: {
    display: "flex",
    justifyContent: 'flex-end',
    width: 150
  }
})

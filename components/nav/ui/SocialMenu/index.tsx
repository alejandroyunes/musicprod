"use client"

import stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../../../app/globalTokens.stylex"
import { useState } from "react"
import ExitSvg from "../../../Assets/Icons/ExitSvg"
import VerticalHamburger from "@/components/Assets/Icons/VerticalHamburger"
import Image from "next/image"
import logo from '../../../Assets/images/logo.webp'
import Facebook from "@/components/Assets/Icons/Facebook"
import Twitter from "@/components/Assets/Icons/Twitter"
import Instagram from "@/components/Assets/Icons/Instagram"
import Youtube from "@/components/Assets/Icons/Youtube"
import HamburgerSvg from "@/components/Assets/Icons/HamburgerSvg"
import HorizontalHamburger from "@/components/Assets/Icons/HorizontalHamburger"
import Link from "next/link"
import FacebookCircle from "@/components/Assets/Icons/FacebookCircle"
import InstagramCircle from "@/components/Assets/Icons/InstagramCircle"
import TwitterCircle from "@/components/Assets/Icons/TwitterCircle"

export default function Social() {
  const [open, setOpen] = useState<boolean | undefined>()

  const handleClose = () => {
    setOpen(false)

    setTimeout(() => {
      setOpen(undefined)
    }, 500)
  }

  return (
    <>
      <div {...stylex.props(s.hamburgerMenu)} onClick={() => setOpen(!open)}>
        <HorizontalHamburger />
      </div>

      <div {...stylex.props(s.container, open && s.slideIn, open === false && s.slideOut)}>
        <div   {...stylex.props(s.header)}>
          <p {...stylex.props(s.capital)}>Music Logo</p>

          <div {...stylex.props(s.animationExit)} onClick={handleClose}>
            <ExitSvg />
          </div>
        </div>

        <div {...stylex.props(s.content)}>

          <ul {...stylex.props(s.body)}>
            <Link href="/" {...stylex.props(s.link)} onClick={handleClose}>
              <li {...stylex.props(s.items)}>
                <p {...stylex.props(s.paragraph)}>
                  Home
                </p>
              </li>
            </Link>

            <Link href="/about" {...stylex.props(s.link)} onClick={handleClose}>
              <li {...stylex.props(s.items)}>
                <p {...stylex.props(s.paragraph)}>
                  About
                </p>
              </li>
            </Link>
            <Link href="/news" {...stylex.props(s.link)} onClick={handleClose}>

              <li {...stylex.props(s.items)}>
                <p {...stylex.props(s.paragraph)}>
                  News
                </p>
              </li>
            </Link>

            <Link href="/blog" {...stylex.props(s.link)} onClick={handleClose}>

              <li {...stylex.props(s.items)}>
                <p {...stylex.props(s.paragraph)}>
                  Blog
                </p>
              </li>
            </Link>

            <Link href="/contact" {...stylex.props(s.link)} onClick={handleClose}>
              <li {...stylex.props(s.items)}>
                <p {...stylex.props(s.paragraph)}>
                  Contact
                </p>
              </li>
            </Link>

          </ul>

          <div {...stylex.props(s.contact)}>
            <div {...stylex.props(s.social)}>
              <span {...stylex.props(s.svg)}>
                <FacebookCircle />
              </span>
              <span {...stylex.props(s.svg)}>
                <InstagramCircle />
              </span>
              <span {...stylex.props(s.svg)}>
                <TwitterCircle />
              </span>
            </div>
          </div>
        </div>

      </div>

      {open && <div {...stylex.props(s.bg)} onClick={handleClose} />}
    </>
  )
}

const slideIn = stylex.keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(100%)' },

})

const slideOut = stylex.keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(-100%)' },
})

const fadeIn = stylex.keyframes({
  '0%': { visibility: 'hidden', opacity: 0 },
  '100%': { visibility: 'visible', opacity: 1 },
})

const s = stylex.create({
  hamburgerMenu: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginLeft: spacing.xxs,
    zIndex: 4,
  },
  container: {
    position: "fixed",
    top: 0,
    left: '-100vw',
    width: "100vw",
    display: 'flex',
    flexDirection: 'column',
    height: "100%",
    borderLeftStyle: "solid",
    borderLeftWidth: 2,
    borderLeftColor: colors.xBorderColor,
    willChange: 'transform',
    backgroundColor: colors.bg,
  },
  slideIn: {
    animationName: slideIn,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 101
  },
  slideOut: {
    animationName: slideOut,
    animationDuration: "0.5s",
    animationFillMode: "backwards",
    zIndex: 101
  },
  header: {
    display: 'flex',
    paddingLeft: {
      default: spacing.xxl,
      '@media (max-width: 1024px)': spacing.md,
    },
  },
  logo: {
    marginTop: spacing.lg
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  paragraph: {
    fontSize: text.h5,
  },
  social: {
    display: 'flex',
    paddingLeft: {
      default: spacing.xl,
      '@media (max-width: 500px)': spacing.md
    }
  },
  capital: {
    fontSize: text.h3,
    marginTop: spacing.lg
  },
  invest: {
    fontSize: text.h3,
    color: colors.primary,
    fontWeight: 'bold'
  },
  animationExit: {
    display: "flex",
    position: "absolute",
    top: 24,
    right: 24,
    cursor: "pointer",
    backgroundColor: colors.gray,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    marginBottom: 16
  },
  content: {
    display: "grid",
    alignItems: 'center',
    height: "100%",
  },
  body: {
    fontSize: text.p,
    color: colors.inverted,
    listStyleType: 'none',
    paddingLeft: {
      default: spacing.xxl,
      '@media (max-width: 1024px)': spacing.md,
    }
  },
  items: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  svg: {
    backgroundColor: {
      default: null,
      ':hover': colors.primary,
    },
    width: 50,
    height: 50,
    cursor: 'pointer',
  },
  paragrah: {
    fontSize: text.h5,
    marginLeft: spacing.xs,
  },
  contact: {
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderTopColor: colors.xBorderColor,
    width: '100%',
    display: 'grid',
    paddingBottom: spacing.sm,
    paddingTop: spacing.sm,
  },
  contactTel: {
    paddingLeft: {
      default: spacing.xxl,
      '@media (max-width: 1024px)': spacing.xl,
    },
    fontSize: text.h4,
    color: colors.inverted,
    fontWeight: 'bold',
    paddingTop: spacing.sm
  },
  contactEmail: {
    paddingLeft: {
      default: spacing.xxl,
      '@media (max-width: 1024px)': spacing.xl,
    },
    fontSize: text.h5,
    color: colors.gray,
    paddingTop: spacing.xxs
  },
  bg: {
    position: "fixed",
    width: '100vw',
    left: 0,
    top: 0,
    height: "100vh",
    backgroundColor: "rgba(20, 22, 27, 0.5)",
    animationName: fadeIn,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 100
  }
})

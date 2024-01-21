'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"

export default function WidgetFooter() {
  const handleClick = () => {
    console.log("click")
  }

  const year = new Date().getFullYear()

  return (
    <section>
      <div {...stylex.props(s.footer)}>
        <p>&copy; {year} All Rights Reserved.</p>
      </div>
    </section>
  )
}

const s = stylex.create({
  footer: {
    marginTop: spacing.xl,
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: colors.xBorderColor,
    padding: `${spacing.lg} 0`,
    textAlign: 'center'
  },
})

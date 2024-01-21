'use client'
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../../app/globalTokens.stylex"

export default function WidgetEvents() {

  return (
    <section>
      <div {...stylex.props(s.container)}>
        <ul {...stylex.props(s.top)}>
          <li {...stylex.props(s.list)}>May 12 2024</li>
          <li {...stylex.props(s.list, s.center)}>Wisconsin</li>
          <li {...stylex.props(s.list, s.center)}>Woodstock Festival</li>
          <li {...stylex.props(s.list, s.last)}>Tickets</li>
        </ul>

        <ul {...stylex.props(s.top)}>
          <li {...stylex.props(s.list)}>May 21 2024</li>
          <li {...stylex.props(s.list, s.center)}>New York</li>
          <li {...stylex.props(s.list, s.center)}>Radio City</li>
          <li {...stylex.props(s.list, s.last)}>Tickets</li>
        </ul>

        <ul {...stylex.props(s.top)}>
          <li {...stylex.props(s.list)}>Jun 4 2024</li>
          <li {...stylex.props(s.list, s.center)}>Washington</li>
          <li {...stylex.props(s.list, s.center)}>DC Festival</li>
          <li {...stylex.props(s.list, s.last)}>Tickets</li>
        </ul>

      </div>

    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    maxWidth: $.maxWidth,
    gridTemplateRows: '1fr',
    gap: spacing.md,
    margin: {
      default: `${spacing.xxxl} auto `,
      '@media (max-width: 900px)': `${spacing.xl} auto 0`
    },
    justifyContent: 'center',
  },
  top: {
    display: 'flex',
    flexDirection: {
      default: 'row',
      '@media (max-width: 1024px)': 'column'
    },
    listStyleType: 'none',
    gap: spacing.md,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: colors.xBorderColor,
  },
  list: {
    minWidth: 200,
    textAlign: {
      default: null,
      '@media (max-width: 1024px)': 'center'
    },
    paddingBottom: spacing.xs
  },
  center: {
    textAlign: 'center'
  },
  last: {
    textAlign: {
      default: 'right',
      '@media (max-width: 1024px)': 'center'
    }
  }
})

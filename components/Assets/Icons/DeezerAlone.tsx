import stylex from "@stylexjs/stylex"
import { s } from "./SearchSvg"

export default function DeezerAlone() {
  return (

    <svg  {...stylex.props(s.svgFill)} width="48px" height="48px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.511 22.011v3.785h6.484v-3.786h-6.486zM16.676 22.011v3.785h6.486v-3.786h-6.486zM8.84 22.011v3.785h6.484v-3.786h-6.486zM1.004 22.011v3.785h6.486v-3.786h-6.486zM24.511 16.742v3.783h6.484v-3.783h-6.484zM16.676 16.742v3.783h6.486v-3.783zM8.84 16.742v3.783h6.484v-3.783h-6.484zM24.51 11.476v3.783h6.486v-3.783zM8.84 11.476v3.783h6.484v-3.783h-6.484zM24.51 6.203v3.786h6.486v-3.786z"></path>
    </svg>
  )
}
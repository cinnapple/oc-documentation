import React from 'react'
import Header from './Header'
import { ThemeProvider } from '@material-ui/styles'
import ORDERCLOUD_THEME from '../../theme/theme.constants'
import { Hidden } from '@material-ui/core'
import MobileNav from './MobileNav'

export default ({ children }) => (
  <React.Fragment>
    <ThemeProvider theme={ORDERCLOUD_THEME}>
      <Header siteTitle="OrderCloud Documentation" />
      {children}
      <Hidden mdUp>
        <MobileNav />
      </Hidden>
    </ThemeProvider>
  </React.Fragment>
)

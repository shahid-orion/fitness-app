import React from 'react'

import { Box, Stack, typography } from '@mui/system'
import Logo from '../assets/images/Logo-1.png'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt="80px" bgColor="#fff2f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with ❤️‍🔥 from a new React Developer. Compliment to @JavaScript
          Mastery
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer

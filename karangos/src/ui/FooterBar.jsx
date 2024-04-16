import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee'

export default function FooterBar() {
  return (
    <Toolbar
      variant="dense"
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        justifyContent: 'center',
        backgroundColor: 'action.desabledBackground'
      }}
    >
      <Typography
        variant="caption"
        //Utilizado para afetar apenas uma parte dentro do typography e não o todo
        sx={{
            '& a':{
                color: 'secondary.light',
            }
        }}
        //Utilizar icone em um componente (MUI UI -> Components -> Material Icons)
      >
        Desenvolvido com <CoffeeIcon fontSize="small" /> por
         <a href="mailto:professor@faustocintra.com.br">Prof. Fausto Cintra</a>
      </Typography>
    </Toolbar>
  )
}
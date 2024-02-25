import { Button, Typography } from '@mui/material'
import { 
  AddCircleOutline as AddIcon, 
  NotificationAddOutlined as NotiAddOutline,
  EditNote as EditIcon,
} from '@mui/icons-material'
import React from 'react'

const Home = () => {
  return (
    <>

      {/* Typography */}
      <Typography variant='h1'>Next.JS MUI App</Typography>
      <Typography variant='h2'>Welcome to Next.JS MUI App</Typography>
      <Typography variant='h3'>This is a Next.JS MUI App</Typography>
      <Typography variant='h4'>This is a Next.JS MUI App</Typography>
      <Typography variant='h5'>This is a Next.JS MUI App</Typography>
      <Typography variant='h6'>This is a Next.JS MUI App</Typography>
      <Typography variant='subtitle1'>This is a Next.JS MUI App</Typography>
      <Typography variant='subtitle2'>This is a Next.JS MUI App</Typography>
      <Typography variant='body1'>This is a Next.JS MUI App</Typography>
      <Typography variant='body2'>This is a Next.JS MUI App</Typography>
      <Typography variant='caption'>This is a Next.JS MUI App</Typography><br />
      <Typography variant='overline'>This is a Next.JS MUI App</Typography><br />

      {/* Buttons contained */}
      <Button variant='contained' color='primary'>Click Me</Button>
      <Button variant='contained' color='secondary'>Click Me</Button>
      <Button variant='contained' color='info'>Click Me</Button>
      <Button variant='contained' color='warning'>Click Me</Button>
      <Button variant='contained' color='error'>Click Me</Button>
      <Button variant='contained' color='success'>Click Me</Button>
      
      {/* Buttons outlined */}
      <Button variant='outlined' color='primary'>Click Me</Button>
      <Button variant='outlined' color='secondary'>Click Me</Button>
      <Button variant='outlined' color='info'>Click Me</Button>
      <Button variant='outlined' color='warning'>Click Me</Button>
      <Button variant='outlined' color='error'>Click Me</Button>
      <Button variant='outlined' color='success'>Click Me</Button>

      {/* Buttons text */}
      <Button variant='text' color='primary'>Click Me</Button>
      <Button variant='text' color='secondary'>Click Me</Button>
      <Button variant='text' color='info'>Click Me</Button>
      <Button variant='text' color='warning'>Click Me</Button>
      <Button variant='text' color='error'>Click Me</Button>
      <Button variant='text' color='success'>Click Me</Button>

      {/* Icons */}
      <div>
        <AddIcon color='primary' />
        <AddIcon color='secondary' />
        <AddIcon color='info' />
        <AddIcon color='warning' />
        <AddIcon color='error' />
        <AddIcon color='success' />
      </div>

      <div>
        <NotiAddOutline color='primary' />
        <NotiAddOutline color='secondary' />
        <NotiAddOutline color='info' />
        <NotiAddOutline color='warning' />
        <NotiAddOutline color='error' />
        <NotiAddOutline color='success' />
      </div>

      <div>
        <EditIcon color='primary' />
        <EditIcon color='secondary' />
        <EditIcon color='info' />
        <EditIcon color='warning' />
        <EditIcon color='error' />
        <EditIcon color='success' />
      </div>
      
    </>
  )
}

export default Home
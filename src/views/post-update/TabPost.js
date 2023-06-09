// ** React Imports
import React from 'react'
import { useState } from 'react'

// ** MUI Imports

import Grid from '@mui/material/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'

import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// ** Icons Imports
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'

import axiosInstance from '../../axios/axiosInstance'
import checkToken from 'src/pages/checkToken'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import Editor from 'src/views/post-update/editor'

// import SunEditor from 'suneditor-react'
// import plugins from 'suneditor/src/plugins'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const useStyles = makeStyles({
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '0'
  }
})

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabPost = () => {
  checkToken()
  console.log(this)

  // ** State

  const classes = useStyles()

  const [title, setTitle] = useState('')
  const [compCategory, setCompCategory] = useState('')
  const [desc, setDesc] = useState('')
  const [popUp, setpopUp] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('compCategory', compCategory)
      formData.append('desc', desc)
      formData.append('popUp', popUp)

      const response = await axiosInstance.post('/comp', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      const message = response.data
      toast.success(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true
      })
      handleResetAll()
    } catch (error) {
      // Sends error to the client side
      console.log(error)
      const message = error.response
      toast.warn(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true
      })
    }
  }

  const handleChangeTitle = event => {
    setTitle(event.target.value)
  }

  const handleChangeContent = event => {
    setCompCategory(event.target.value)
  }

  const handleChangeDesc = event => {
    setDesc(event)
    console.log(event)
  }

  const handleChangePopUp = event => {
    setpopUp(true)
  }

  const handleResetAll = event => {
    setTitle('')
    setCompCategory('')
    setDesc('')
    setpopUp(false)
  }

  return (
    <CardContent>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <TextField fullWidth label='Title' placeholder='Leonard Carter' name='title' onChange={handleChangeTitle} />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Content Type</InputLabel>
              <Select name='compCategory' label='compCategory' onChange={handleChangeContent} defaultValue='NOTICE'>
                <MenuItem value='NOTICE'>Notice</MenuItem>
                <MenuItem value='NEWS'>News</MenuItem>
                <MenuItem value='DOWNLOAD'>Download</MenuItem>
                <MenuItem value='GALLERY'>Gallery</MenuItem>
                <MenuItem value='EVENT'>Events</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Editor id='desc' label='desc' contentType={desc} setContentType={handleChangeDesc} />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox onChange={handleChangePopUp} color='primary' />}
              label='Pop Up'
              name='popUp'
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' size='large'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabPost

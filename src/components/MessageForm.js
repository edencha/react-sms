/**
 * @author EdenCha <eden@nurigo.net>
 */
import React from 'react'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'
import ContactAddress from './ContactAddress'
import ImageUploadForm from './ImageUploadForm'
import MessageStatus from './MessageStatus'
import SenderIdForm from './SenderIdForm'

const styles = theme => ({
  root: {
    padding: theme.spacing(1)
  },
  inputPaper: {
    padding: theme.spacing(1)
  },
  textarea: {
    resize: 'none',
    border: 'none',
    outline: 'none',
    width: '100%',
    minHeight: 150,
    padding: 0,
    backgroundColor: 'transparent',
    fontSize: '1em'
  }
})

const MessageForm = ({ classes, proxy, ...props }) => {
  const { onChangeText } = proxy
  const { bytes, params = {} } = props
  const { text } = params
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SenderIdForm />
        </Grid>
        <Grid item xs={12}>
          <ContactAddress />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.inputPaper}>
            <Grid container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="caption" color="primary">
                  문자 내용
                </Typography>
                <textarea
                  placeholder="이곳에 문자 내용을 입력합니다."
                  onChange={onChangeText}
                  className={classes.textarea}
                >
                  {text}
                </textarea>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" display="inline" color="primary">
                  {bytes}
                </Typography>
                <Typography variant="caption" display="inline">
                  {' '}
                  Bytes
                </Typography>
                <Typography
                  variant="body2"
                  display="inline"
                  color="textSecondary"
                >
                  {' '}
                  (90Bytes 이상인 경우 LMS로 전송됩니다. 최대 2,000bytes)
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ImageUploadForm />
        </Grid>
        <Grid item xs={12}>
          <MessageStatus params={params} />
        </Grid>
      </Grid>
    </div>
  )
}
export default compose(withStyles(styles), withWidth())(MessageForm)

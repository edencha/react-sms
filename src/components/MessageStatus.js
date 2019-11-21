/**
 * @author EdenCha <eden@nurigo.net>
 */
import React from 'react'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'

const styles = theme => ({})

const MessageForm = ({ classes, ...props }) => {
  const { params = {} } = props
  const { type, cost } = params
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="body2" display="inline">
            현재 타입 :{' '}
          </Typography>
          <Typography variant="body2" display="inline" color="primary">
            <strong>{type}</strong>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" display="inline">
            비용 :{' '}
          </Typography>
          <Typography variant="body2" display="inline" color="primary">
            <strong>{Number(cost).toLocaleString()}</strong>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default compose(withStyles(styles), withWidth())(MessageForm)

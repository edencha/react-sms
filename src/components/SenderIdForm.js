/**
 * @author EdenCha <eden@nurigo.net>
 */
import React from 'react'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Paper,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Icon,
  TextField,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from '@material-ui/core'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'

const styles = theme => ({
  // recipientWrap: {
  //   maxHeight: 150,
  //   overflowY: 'scroll'
  // },
})

const SenderIdForm = ({ classes, proxy, ...props }) => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="caption" color="primary">
            발신번호 선택
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6} md>
              <FormControl className={classes.formControl} fullWidth>
                <Select displayEmpty>
                  <MenuItem value={10}>010-2819-9342</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} md="auto">
              <Button
                fullWidth
                size="small"
                color="primary"
                variant="contained"
              >
                새로운 발신번호 등록
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default compose(withStyles(styles), withWidth())(SenderIdForm)

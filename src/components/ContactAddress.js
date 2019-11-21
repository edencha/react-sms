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
  recipientList: {
    padding: theme.spacing(1)
  }
})

const ContactAddress = ({ classes, proxy, ...props }) => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="caption"
            display="block"
            color="primary"
          >
            수신번호 추가
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            display="block"
            color="textSecondary"
          >
            수신번호는 한 번에 최대 10,000명 까지 추가할 수 있습니다.
          </Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs="auto">
              <Button variant="outlined" size="small">
                주소록에서 추가
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button variant="outlined" size="small">
                엑셀에서 추가
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button variant="outlined" size="small">
                텍스트로 추가
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={2} md="auto">
              <TextField />
            </Grid>
            <Grid item xs={6} md>
              <TextField fullWidth />
            </Grid>
            <Grid item xs={4} md="auto">
              <Button
                fullWidth
                size="small"
                color="primary"
                variant="contained"
              >
                수신번호 간편 추가
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="caption"
            display="block"
            color="primary"
          >
            수신번호 목록 (현재 {Number(1234).toLocaleString()}개 추가됨)
          </Typography>
          <div className={classes.recipientWrap}>
            <List dense className={classes.recipientList}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(data => {
                return (
                  <ListItem divider>
                    <ListItemText
                      primary="홍길동"
                      primaryTypographyProps={{
                        color: 'textSecondary'
                      }}
                    />
                    <ListItemText primary="010-2819-0342" />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <Icon>delete</Icon>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })}
            </List>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default compose(withStyles(styles), withWidth())(ContactAddress)

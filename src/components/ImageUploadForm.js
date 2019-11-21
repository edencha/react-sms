import React, { Component } from 'react'
import compose from 'recompose/compose'
import withWidth from '@material-ui/core/withWidth'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { FilePond } from 'react-filepond'
import 'filepond/dist/filepond.min.css'

const styles = theme => ({
  FileUploadForm: {}
})

class ImageUploadForm extends Component {
  render = () => {
    const { classes } = this.props
    const { files = [], filePondProps = {} } = this.props
    return (
      <div className={classes.FileUploadForm}>
        <Typography gutterBottom variant="caption" color="primary">
          문자 사진 첨부
        </Typography>
        <Typography gutterBottom variant="body2" color="textSecondary">
          사진을 첨부하면 문자 타입이 MMS로 변경되어, 과금액이 달라질 수
          있습니다.
        </Typography>
        <FilePond
          files={files}
          onupdatefiles={this.onUpdateFiles}
          {...filePondProps}
        />
      </div>
    )
  }
}

export default compose(withStyles(styles), withWidth())(ImageUploadForm)

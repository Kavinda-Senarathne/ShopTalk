import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import shoppingImg from './../assets/images/shopping.jpg'

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
})

class Home extends Component {
  render() {
    const {classes} = this.props
    return (
        <Card className={classes.card}>
          <Typography type="headline" component="h2" className={classes.title}>
            Dash board
          </Typography>
          <CardMedia className={classes.media} image={shoppingImg} title="Shopping"/>
          <CardContent>
            <Typography type="body1" component="p">
             <h2><center> Welcome to ShopTalk home page. </center></h2>
            </Typography>
          </CardContent>
        </Card>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

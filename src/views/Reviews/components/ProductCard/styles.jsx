export default theme => ({
  root: {
    maxWidth: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3
  },
  imageWrapper: {
    width: '4rem',
    borderRadius: '0.3125rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  details: {
    display: 'flex',
  },
  locationDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  siteDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  description: {
    lineHeight: '1.3rem',
    overflow: 'auto',
    height: '7.5rem',
    textOverflow: 'ellipsis',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  stats: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.unit
  },
  updateIcon: {
    color: theme.palette.text.secondary
  },
  updateText: {
    marginLeft: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  downloadsIcon: {
    marginLeft: 'auto',
    color: theme.palette.text.secondary
  },
  downloadsText: {
    marginLeft: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  loginButton: {
    marginTop: theme.spacing.unit * 1,
    width: '100%'
  },
  loginIcon: {
    marginRight: theme.spacing.unit
  },
  card: {
    maxWidth: '46.875rem',
    maxHeight: '15.625rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginLeft: '0.625rem'
  },
  location: {
    fontWeight: 100,
    fontSize: 14,
    marginLeft: '0.625rem'
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    marginLeft: 'auto',
    width: '100%',
    height: '100%',
    flexShrink: 0,
    flexGrow: 0
  },
  icon: {
    color: 'gray',
    height: '1.1rem',
  },
  site: {
    color: 'gray',
    height: '1.1rem',
  },
});
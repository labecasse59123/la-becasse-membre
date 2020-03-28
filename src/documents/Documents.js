import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import { connect } from 'react-redux';

import { documentActions } from './redux';
import Layout from '../layout/Layout';

const useStyles = makeStyles(theme => ({
  documents: {
    marginTop: theme.spacing(12),
    paddingLeft: theme.spacing(3),
    width: '100%',
  },
}));

function Document(props) {
  const { name, url } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
        <IconButton aria-label="Télécharger le document" target="_blank" href={`/api${url}`}>
            <CloudDownloadIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

function Loading() {
  return (
    <Grid item xs={12}>
      <Typography variant="body2" color="textSecondary">
        Chargement des documents...
      </Typography>
    </Grid>
  );
}

function NoDocuments() {
  return (
    <Grid item xs={12}>
      <Typography variant="body2" color="textSecondary">
        Aucun document disponible.
      </Typography>
    </Grid>
  );
}

function DocumentView(props) {
  const classes = useStyles();

  const  { documents, fetchDocuments, waiting } = props;
  useEffect(() => fetchDocuments(), [fetchDocuments]);

  const documentList = documents.length ? 
        documents.map(doc => (<Document key={doc._id} {...doc} />))
       : (<NoDocuments />);

  let content = waiting ? (<Loading />) : documentList;

  return (
    <Layout title="La Bécasse - Documents">
      <Grid className={classes.documents} container spacing={3}>
        {content}
      </Grid>
    </Layout>
  );
}


const mapStateToProps = state => {
  const { documents, waiting } = state.document;

  return {
    documents,
    waiting,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDocuments: () => {
      dispatch(documentActions.fetchDocuments());
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentView);

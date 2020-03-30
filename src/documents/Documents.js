import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import { useSelector, useDispatch } from 'react-redux';

import { documentActions } from './redux';
import Layout from '../layout/Layout';

const useStyles = makeStyles(theme => ({
  documents: {
    marginTop: theme.spacing(12),
    paddingLeft: theme.spacing(3),
    width: '100%',
  },
}));

const Document = ({ name, url }) => (
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

const Loading = () => (
    <Grid item xs={12}>
      <Typography variant="body2" color="textSecondary">
        Chargement des documents...
      </Typography>
    </Grid>
  );

const NoDocuments = () => (
    <Grid item xs={12}>
      <Typography variant="body2" color="textSecondary">
        Aucun document disponible.
      </Typography>
    </Grid>
  );

export default function DocumentView(props) {
  const classes = useStyles();

  const { documents, waiting } = useSelector(state => state.document);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(documentActions.fetchDocuments())
  }, [dispatch]);

  const documentList = documents.length ? 
        documents.map(doc => (<Document key={doc._id} {...doc} />))
       : (<NoDocuments />);

  const content = waiting ? (<Loading />) : documentList;

  return (
    <Layout title="La Bécasse - Documents">
      <Grid className={classes.documents} container spacing={3}>
        {content}
      </Grid>
    </Layout>
  );
}

import React from "react";
import {
  Link as RouterLink,
} from "react-router-dom";
import MaterialLink from '@material-ui/core/Link';

export default function Link(props) {
    const {to, label} = props;
    return (
        <MaterialLink component={RouterLink} to={to}>
          {label}
        </MaterialLink>
    )
}
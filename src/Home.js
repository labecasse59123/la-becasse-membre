import React from 'react';

import Layout from './layout/Layout';
import Hunt from './hunt/Hunt';
import HuntCounter from './hunt/HunterCounter';

export default function Home(props) {
  return (
    <Layout title="La Bécasse - Inscription Chasse">
      <HuntCounter {...props} />
      <Hunt {...props} />
    </Layout>
  );
}

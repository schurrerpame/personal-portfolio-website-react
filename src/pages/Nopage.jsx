import React from 'react';
import { Contact } from './../container';
import PageWrapper from './PageWrapper';

const Nopage = () => {
  return (
    <PageWrapper>
        <div className="text-center display-1 py-4 my-4">
            404 - Error
        </div>
      <Contact />
    </PageWrapper>
  );
};

export default Nopage;



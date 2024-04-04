import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { BlobProvider } from '@react-pdf/renderer';
import Resume from '../components/Resume';

import cv from '../assets/documents/SE_Resume_Tiara Puspita.pdf'

const Resume_Tiara = () => {
  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <Resume />
      </PDFViewer>
      <BlobProvider document={<Resume />}>
        {({ blob, url, loading, error }) => {
          if (loading) return "Loading...";
          if (error) return `Error: ${error}`;
          return <a href={url} download={cv}>Download PDF</a>;
        }}
      </BlobProvider>
    </div>
  );
};

export default Resume_Tiara;

import { Document, Page, pdfjs } from 'react-pdf';
import React from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resume from '../../resources/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function MyPDFViewer() {

  return (
    <div>
      <Document
        file={resume}// can also be a URL or Blob
      >
        <Page pageNumber={1} renderTextLayer={false}/>
      </Document>
    </div>
  );
}

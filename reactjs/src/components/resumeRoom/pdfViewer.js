import { Document, Page, pdfjs } from 'react-pdf';
import React, { useEffect, useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resume from '../../resources/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function MyPDFViewer() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Document
        file={resume}// can also be a URL or Blob
      >
        <Page pageNumber={1} renderTextLayer={false} width={width * 0.6}/>
      </Document>
    </div>
  );
}

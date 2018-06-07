import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

/** Progressbar at 100% and height 20px */
export default function Example100Percent() {
  return <ProgressBar percent={100} width={400} height={20} />;
}

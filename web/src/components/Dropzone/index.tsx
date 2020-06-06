import React, {useCallback, useState} from 'react';
import { FiUpload } from 'react-icons/fi';
import {useDropzone} from 'react-dropzone';

import './styles.css';

const Dropzone = () => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} accept='image/*'/>
      {
        selectedFileUrl
          ? <img src={selectedFileUrl} alt='Point Thumb'/>
          : (<p>
            <FiUpload />
            Imagem do establecimento
          </p>)
      }
      
    </div>
  );
}

export default Dropzone;

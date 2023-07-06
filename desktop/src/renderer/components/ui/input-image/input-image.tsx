import { useState } from 'react';
import Button from '../button/button';
import { useTranslation } from 'react-i18next';
import { InputContainer, InputImageContainer } from './input-image-styles.css';
import { useUploadImage } from 'renderer/hooks/use-upload-image';

interface InputImageProps {
  updateFormValue: (field: string, value: any) => void;
}

const InputImage = ({ updateFormValue }: InputImageProps) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <div className={InputContainer}>
      {selectedImage && (
        <div className={InputImageContainer}>
          <img
            alt="not found"
            width={'400px'}
            src={AWS_ACCESS_URL + selectedImage.name}
          />
          <Button
            variant="small"
            type="button"
            onClick={() => setSelectedImage(null)}
          >
            {t('common.remove')}
          </Button>
        </div>
      )}
        <input
          type="file"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            useUploadImage(event)
            const input = event.target;
            if (!input.files?.length) {
              return;
            }
            const file = input.files[0];
            updateFormValue('image', file.name);
            setTimeout(() => {
              setSelectedImage(file);
            }, 300);
          }}
        />
    </div>
  );
};

export default InputImage;

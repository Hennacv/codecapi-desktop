import { useState } from 'react';
import Button from '../button/button';
import { useTranslation } from 'react-i18next';
import { InputContainer, InputImageContainer } from './input-image-styles.css';

interface InputImageProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputImage = ({ onChange }: InputImageProps) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <div className={InputContainer}>
      {selectedImage?.name && (
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
            onChange(event);
            const input = event.target;
            if (!input.files?.length) {
              return;
            }
            const file = input.files[0];
            setSelectedImage(file);
          }}
        />
    </div>
  );
};

export default InputImage;

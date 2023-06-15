import IconAdd from 'assets/icons/icon-add';
import Button from '../ui/button/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Tricks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onNewTrick = () => {
    navigate('/tricks/new');
  };
  return (
    <>
      <Button type="button" variant="small" onClick={() => onNewTrick()}>
        {t('trick.new.button.navigate')}
        <IconAdd variant={'small'} />
      </Button>
    </>
  );
};

export default Tricks;

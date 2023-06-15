import IconAdd from 'assets/icons/icon-add';
import Button from '../../ui/button/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { NewTrickButtonPosition, TrickListContainer } from './trick-list-styles.css';
import { useGetTricks } from 'renderer/hooks/use-get-tricks';
import { Trick } from 'renderer/utils/types';
import TrickCard from '../trick-card/trick-card';

const Tricks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data = [], refetch } = useGetTricks();

  const onNewTrick = () => {
    navigate('/tricks/new');
  };

  console.log(data)
  return (
    <>
    <div className={NewTrickButtonPosition}>
      <Button type="button" variant="small" onClick={() => onNewTrick()}>
        {t('trick.new.button.navigate')}
        <IconAdd variant={'small'} />
      </Button>
    </div>
    <div className={TrickListContainer}>
    {data.map((trick: Trick) => (
          <TrickCard key={trick.id} trick={trick} refetch={refetch} />
        ))}

    </div>
    </>
  );
};

export default Tricks;

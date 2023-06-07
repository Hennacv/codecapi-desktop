import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/nl';

dayjs.extend(relativeTime);
dayjs.locale('nl');

export default dayjs;

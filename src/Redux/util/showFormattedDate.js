import advancedFormat from 'dayjs/plugin/advancedFormat';
import dayJs from 'dayjs';

dayJs.extend(advancedFormat);

const showFormattedDate = timestamp => dayJs(timestamp).format('MMM Do');

export default showFormattedDate;
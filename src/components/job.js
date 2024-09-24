import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage, useIntl } from 'react-intl';

const Job = (props) => {
  const intl = useIntl();
  const isSpanish = intl.locale.startsWith('es');

  const formatSalary = (salary) => {
    const millionWord = isSpanish
      ? (salary === 1 ? 'millón' : 'millones')
      : 'million';
    return `${salary} ${millionWord}`;
  };

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{formatSalary(props.offer.salary)}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.views}
          style="decimal"
          useGrouping={true}
        />
      </td>
    </tr>
  );
};

export default Job;
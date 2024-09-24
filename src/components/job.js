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
// The FormattedDate and FormattedNumber components are used to format the date and number values respectively. The useIntl hook is used to get the current locale and determine if the language is Spanish. The formatSalary function is used to format the salary value. The FormattedMessage component is used to format the million word based on the locale. The Job component receives the offer prop and renders the offer details in a table row. The offer details include the id, name, company, salary, city, date, and views. The date and views values are formatted using the FormattedDate and FormattedNumber components respectively. The formatSalary function is used to format the salary value based on the locale. The Job component is exported as the default component.
export default Job;
import { User } from "../model/types";
import moment from 'moment';
import { useMemo } from 'react';

const useFormateUserData = (user: User) => {
  const formattedData = useMemo(() => {
    const phone = user.phone.replace(/\D/g, '');

    return {
      date: moment(user.dob.date).format('D/M/YYYY'),
      name: `${user.name.first} ${user.name.last}`,
      address: `${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.state} ${user.location.postcode}`,
      phone: `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`,
      picture: user.picture,
      password: user.login.password
    }
  }, [user])
  return formattedData;
}

export default useFormateUserData;
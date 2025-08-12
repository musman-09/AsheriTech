import { useState } from 'react';

const useErrorHandlingHook = initialData => {
  const [apiData, setApiData] = useState(initialData);

  const setterForApiData = (key, value) => {
    setApiData(prevData => ({
      ...prevData,
      [key]: value,

      [`error_${key}`]:
        value === ''
          ? key === 'userName'
            ? 'Email address is required'
            : key === 'receiptNumber'
            ? 'Receipt number is required'
            : `${key} is required`
          : '',
    }));
  };

  const resetStates = () => {
    setApiData(prevData => {
      const temp = {};
      Object.keys(prevData).forEach(key => {
        if (!key.startsWith('error_')) {
          temp[key] = '';
        }
      });
      return temp;
    });
  };

  const checkForError = () => {
    let isAllowedForProceeding = true;

    setApiData(prevData => {
      const updatedData = { ...prevData };

      Object.keys(prevData).forEach(key => {
        if (
          !key.startsWith('error_') &&
          (prevData[key] === null ||
            prevData[key] === '' ||
            prevData[key] === undefined)
        ) {
          updatedData[`error_${key}`] =
            key === 'userName'
              ? 'Email address is required'
              : key === 'receiptNumber'
              ? 'Receipt number is required'
              : `${key} is required`;

          isAllowedForProceeding = false;
        }
      });

      return updatedData;
    });

    return isAllowedForProceeding;
  };

  return {
    apiData,
    setterForApiData,
    checkForError,
    resetStates,
  };
};

export default useErrorHandlingHook;

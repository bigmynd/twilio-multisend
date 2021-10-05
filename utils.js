/**
 * Removes duplicates from array of phone numbers
 * @param phoneNumbers
 * @returns Array of phones without duplicates
 *
 * @author abednego Mwanza
 * */

export const removeDuplicates = (phoneNumbers) =>
  phoneNumbers.filter((item, index, arr) => arr.indexOf(item) === index);

/**
 * Checks phone number validity
 * @param phoneNumber
 * @returns valid phone number
 *
 *  @author abednego Mwanza
 * */

export const isValidNumber = (phoneNumber) => {
  const numberArr = phoneNumber.trim().split("");
  console.log("Testing", phoneNumber);
  let newNumber;
  const hasAreaCode = new RegExp(/^\+260/).test(phoneNumber);

  if (hasAreaCode) {
    newNumber = phoneNumber;
  } else if (numberArr[0] === "0" && phoneNumber.length === 10) {
    console.log(numberArr);
    const sliced = numberArr.slice(1);
    const merge = sliced.join("");
    newNumber = "+260" + merge;
  } else if (phoneNumber.length === 9) {
    newNumber = "+260" + phoneNumber;
  } else {
    return undefined;
  }

  console.log(newNumber.length);
  // check new number validity
  const numberLength = newNumber.length;
  return numberLength < 13 || numberLength > 13 ? undefined : newNumber;
};

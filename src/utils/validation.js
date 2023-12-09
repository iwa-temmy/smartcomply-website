export const validateLength = (
    name,
    value,
    { min, max, required } = { min: 0, max: Infinity }
  ) => {
    if (value.length < 1 && required) return `${name} is required.`;
    else if (value.length < min)
      return `${name} should be atleast ${min} characters`;
    else if (value.length > max)
      return `${name} should not be more than ${max} character`;
  };
  export const validatePattern = (name, value, pattern) => {
    if (pattern && !pattern.test(value)) return `${name} is not valid`;
  };
  export const validateOptions = (name, value, { options, required }) => {
    if (options && !options?.includes(value) && required)
      return `Please select a valid ${name}`;
  };
  export const validateMatched = (name, value, matchedPatterns) => {
    let error = "";
    //checking if the matched pattern object isn't empty
    if (Object.keys(matchedPatterns || {})?.length) {
      for (let pattern in matchedPatterns) {
        if (!matchedPatterns[pattern].test(value)) {
          error = `${name} must include ${pattern}`;
        }
      }
      return error;
    }
  };
  export const validateMatchField = (name, value, matchField = {}) => {
    const { value: matchValue, name: matchName } = matchField;
    if (matchValue && matchValue !== value)
      return `${name} doesn't match with ${matchName}`;
  };
  export const validateField = (value = "", validations, data = {}) => {
    const {
      min,
      max,
      name,
      options,
      required,
      pattern,
      matchedPatterns,
      matchField
    } = validations;
    let error = "";
    const lengthError = validateLength(name, value, { min, max, required }),
      optionsError = validateOptions(name, value, { options, required }),
      patternError = validatePattern(name, value, pattern),
      matchedPatternError = validateMatched(name, value, matchedPatterns),
      matchFieldError = validateMatchField(name, value, {
        ...matchField,
        value: data?.[matchField?.key]
      });
    error =
      lengthError ||
      optionsError ||
      patternError ||
      matchedPatternError ||
      matchFieldError;
  
    return { isValid: !error, message: error };
  };
  
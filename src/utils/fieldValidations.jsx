export const SUBSCRIPTION_VALIDATION = {
  email: {
    name: "Work Email",
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,7}$/i,
    required: true,
  },
};

export const BOOK_DEMO_VALIDATION = {
  work_email: {
    name: "Work Email",
    pattern:
      /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/i,
    required: true,
  },
  firstName: {
    name: "First Name",
    required: true,
  },
  lastName: {
    name: "Last Name",
    required: true,
  },
  company: {
    name: "Company",
    required: true,
  },
  position: {
    name: "Position",
    required: true,
  },
  phone_number: {
    name: "Phone number",
    required: true,
  },
  country: {
    name: "Country",
    required: true,
  },
};

export const GET_STARTED_VALIDATION = {
  email: {
    name: "Email",
    pattern:
      /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/i,
    required: true,
  },
  first_name: {
    name: "First Name",
    required: true,
  },
  last_name: {
    name: "Last Name",
    required: true,
  },
  company_name: {
    name: "Company",
    required: true,
  },
  password: {
    name: "Password",
    min: 8,
    // pattern:
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/i,
    required: true,
  },
  confirm_password: {
    name: "Confirm Password",
    min: 8,
    // pattern:
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/i,
    required: true,
  },
  user_type: {
    name: "User type",
    required: true,
  },
};

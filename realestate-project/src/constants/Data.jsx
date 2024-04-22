import React from "react";

import toast from "react-hot-toast";

export const toastText = (message, type) => {
  // Common style configuration for both success and error toasts
  const commonStyle = {
    style: {
      fontSize: "16px",
    },
  };

  switch (type) {
    case "success":
      toast.success(message, commonStyle);
      break;

    case "error":
      toast.error(message, commonStyle);
      break;
  }
};

export const EmailSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={17} fill="none">
    <path
      fill="#27272E"
      d="M1.5 16.5a1.438 1.438 0 0 1-1.05-.45A1.438 1.438 0 0 1 0 15V2A1.439 1.439 0 0 1 .45.95 1.439 1.439 0 0 1 1.5.5h17A1.538 1.538 0 0 1 20 2v13a1.538 1.538 0 0 1-1.5 1.5h-17ZM10 8.95 1.5 3.375V15h17V3.375L10 8.95Zm0-1.5L18.4 2H1.625L10 7.45Z"
    />
  </svg>
);

export const PasswordSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={23} fill="none">
    <path
      fill="#27272E"
      d="M2.19 22.5a1.564 1.564 0 0 1-1.57-1.571V9.562A1.565 1.565 0 0 1 2.19 7.99h1.83V5.476a4.8 4.8 0 0 1 1.453-3.523A4.8 4.8 0 0 1 9 .5a4.8 4.8 0 0 1 3.52 1.454 4.801 4.801 0 0 1 1.453 3.523V7.99h1.836a1.565 1.565 0 0 1 1.571 1.57V20.93a1.566 1.566 0 0 1-1.57 1.57H2.19Zm0-1.571h13.62V9.562H2.19v11.367ZM9 17.262a1.967 1.967 0 0 0 1.427-.576 1.873 1.873 0 0 0 .592-1.386 2.062 2.062 0 0 0-.589-1.427 1.908 1.908 0 0 0-2.855 0 2.062 2.062 0 0 0-.589 1.427 1.87 1.87 0 0 0 .59 1.388A1.968 1.968 0 0 0 9 17.262ZM5.6 7.99h6.81V5.476a3.4 3.4 0 0 0-6.8 0L5.6 7.99Z"
    />
  </svg>
);

export const UserSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g id="Group_57" data-name="Group 57" transform="translate(-861 -365)">
      <rect
        id="Rectangle_9"
        data-name="Rectangle 9"
        width="24"
        height="24"
        transform="translate(861 365)"
        fill="none"
        opacity="0.5"
      />
      <path
        id="person_FILL0_wght400_GRAD0_opsz48"
        d="M17.275,17.646A4.17,4.17,0,0,1,12.928,13.3,4.17,4.17,0,0,1,17.275,8.95,4.17,4.17,0,0,1,21.623,13.3a4.17,4.17,0,0,1-4.348,4.348ZM8,26.95V24.225a3.19,3.19,0,0,1,.551-1.884,3.536,3.536,0,0,1,1.42-1.188,21.787,21.787,0,0,1,3.725-1.3,15.057,15.057,0,0,1,3.58-.435,14.423,14.423,0,0,1,3.565.449,24.691,24.691,0,0,1,3.71,1.29A3.5,3.5,0,0,1,26,22.341a3.19,3.19,0,0,1,.551,1.884V26.95Zm1.739-1.739H24.812v-.986a1.588,1.588,0,0,0-.275-.884,1.745,1.745,0,0,0-.681-.623,15.392,15.392,0,0,0-3.391-1.232,15,15,0,0,0-3.188-.333,15.4,15.4,0,0,0-3.217.333,14.722,14.722,0,0,0-3.391,1.232,1.744,1.744,0,0,0-.928,1.507Zm7.536-9.3A2.528,2.528,0,0,0,19.884,13.3a2.609,2.609,0,1,0-5.217,0,2.528,2.528,0,0,0,2.609,2.609ZM17.275,13.3ZM17.275,25.211Z"
        transform="translate(856 359.05)"
        fill="#27272e"
      />
    </g>
  </svg>
);

export const ToastSuccessSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none">
      <path
        fill="#fff"
        d="m8.542 14.723 6.98-6.98-1.384-1.371-5.596 5.596L5.77 9.195l-1.358 1.372 4.131 4.156Zm1.453 5.397c-1.375 0-2.67-.26-3.885-.782a10.066 10.066 0 0 1-3.185-2.144 10.073 10.073 0 0 1-2.143-3.182A9.739 9.739 0 0 1 0 10.128c0-1.39.26-2.694.782-3.909a9.95 9.95 0 0 1 2.141-3.173c.907-.9 1.967-1.613 3.182-2.139A9.684 9.684 0 0 1 9.99.12c1.392 0 2.696.262 3.912.786a10.096 10.096 0 0 1 3.174 2.136c.9.899 1.612 1.956 2.137 3.172A9.764 9.764 0 0 1 20 10.126a9.691 9.691 0 0 1-.788 3.887 10.23 10.23 0 0 1-2.138 3.183 9.951 9.951 0 0 1-3.172 2.142 9.798 9.798 0 0 1-3.907.782Zm-.002-1.912c2.248 0 4.157-.786 5.727-2.358 1.57-1.572 2.355-3.48 2.355-5.724 0-2.248-.785-4.156-2.355-5.726-1.57-1.57-3.481-2.355-5.734-2.355-2.236 0-4.141.785-5.714 2.355-1.574 1.57-2.36 3.48-2.36 5.733 0 2.237.786 4.142 2.358 5.715 1.572 1.573 3.48 2.36 5.723 2.36Z"
      />
    </svg>
  );
};

export const ToastErrorSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none">
      <path
        d="M7.12531 15.1784L10.6358 11.668L14.1462 15.1784L15.2688 14.0558L11.7584 10.5454L15.2688 7.03494L14.1462 5.91234L10.6358 9.42279L7.12531 5.91234L6.00271 7.03494L9.51316 10.5454L6.00271 14.0558L7.12531 15.1784ZM10.6376 20.5386C9.2627 20.5386 7.96765 20.278 6.75249 19.7569C5.53734 19.2357 4.4758 18.5212 3.56787 17.6133C2.65995 16.7054 1.94542 15.6444 1.42429 14.4305C0.903147 13.2166 0.642578 11.9222 0.642578 10.5473C0.642578 9.15625 0.903147 7.85315 1.42429 6.63799C1.94542 5.42284 2.65924 4.36509 3.56575 3.46473C4.47223 2.56438 5.53276 1.85159 6.74733 1.32639C7.96189 0.801179 9.25703 0.538574 10.6327 0.538574C12.0245 0.538574 13.3285 0.800824 14.5448 1.32532C15.761 1.84983 16.819 2.56165 17.7186 3.4608C18.6183 4.35995 19.3306 5.41728 19.8554 6.6328C20.3802 7.84832 20.6426 9.15252 20.6426 10.5454C20.6426 11.9216 20.38 13.2172 19.8548 14.4322C19.3296 15.6472 18.6168 16.7081 17.7164 17.6149C16.8161 18.5217 15.7589 19.2357 14.545 19.7569C13.3311 20.278 12.0287 20.5386 10.6376 20.5386ZM10.6358 18.627C12.8837 18.627 14.7927 17.8409 16.3626 16.2687C17.9324 14.6965 18.7174 12.7887 18.7174 10.5454C18.7174 8.29741 17.9324 6.38848 16.3626 4.8186C14.7927 3.24872 12.8815 2.46378 10.6289 2.46378C8.3925 2.46378 6.48759 3.24872 4.91421 4.8186C3.34083 6.38848 2.55415 8.29969 2.55415 10.5522C2.55415 12.7886 3.34025 14.6936 4.91247 16.2669C6.48468 17.8403 8.39245 18.627 10.6358 18.627Z"
        fill="#fff"
      />
    </svg>
  );
};

export const ImageAddSvg = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="text-5xl text-active-orange outline-none"
    height="20px"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934L22.0007 13.3417C21.3749 13.1204 20.7015 13 20 13V5H4L4.001 19L13.2929 9.70715C13.6528 9.34604 14.22 9.31823 14.6123 9.62322L14.7065 9.70772L18.2521 13.2586C15.791 14.0069 14 16.2943 14 19C14 19.7015 14.1204 20.3749 14.3417 21.0007L2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path>
  </svg>
);

export const EditSvg = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="edit"
    width="2em"
    height="2em"
    fill="currentColor"
    aria-hidden="true"
    color="#f97316"
  >
    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
  </svg>
);

export const DeleteSvg = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="delete"
    width="2em"
    height="2em"
    fill="currentColor"
    aria-hidden="true"
    color="red"
  >
    <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
  </svg>
);

export const DeleteModalSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
    <path
      fill="#e74032"
      stroke="rgba(0,0,0,0)"
      d="M21.539 79.153a8.6 8.6 0 0 1-8.592-8.469L9.86 23.422H7.221a3.22 3.22 0 1 1 0-6.44h16.894V9.8A8.8 8.8 0 0 1 32.909 1h14.184a8.807 8.807 0 0 1 8.8 8.8v7.181h16.894a3.22 3.22 0 0 1 0 6.44H70.14l-3.087 47.263a8.591 8.591 0 0 1-8.584 8.469Zm-2.164-8.8v.209a2.163 2.163 0 0 0 2.16 2.158h36.93a2.157 2.157 0 0 0 2.152-2.158c0-.07 0-.139.006-.209L63.7 23.422H16.311Zm30.086-53.371V9.8a2.37 2.37 0 0 0-2.368-2.367H32.909a2.368 2.368 0 0 0-2.36 2.367v7.181ZM48.02 62.51a3.215 3.215 0 0 1-3.085-3.341l.859-21.331a3.22 3.22 0 0 1 6.434.261l-.859 21.325a3.222 3.222 0 0 1-3.215 3.092 1.1 1.1 0 0 1-.134-.006Zm-16.173.006a3.221 3.221 0 0 1-3.215-3.086l-.858-21.33a3.22 3.22 0 0 1 6.434-.261l.859 21.331a3.225 3.225 0 0 1-3.085 3.347Z"
      data-name="Union 159"
    />
    <path
      fill="none"
      d="M0 0h80v80H0z"
      data-name="Rectangle 9533"
      opacity={0.5}
    />
  </svg>
);
export const CloseSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={17} fill="none">
    <path
      fill="#040707"
      d="M16 1.678 14.389.068 8 6.455 1.611.067 0 1.678l6.389 6.39L0 14.455l1.611 1.611L8 9.678l6.389 6.39L16 14.455 9.611 8.067 16 1.678Z"
    />
  </svg>
);

export const loginFields = [
  {
    title: "Email Address",
    id: "email",
    type: "text",
    name: "email",
    svg: <EmailSvg />,
    placeHolder: "Please enter your email address",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter your email address",
        validateTrigger: "onChange",
      },
      {
        type: "email",
        message: "Please enter valid e-mail",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Password",
    id: "password",
    type: "password",
    name: "password",
    svg: <PasswordSvg />,
    placeHolder: "Please enter your password",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter your password",
        validateTrigger: "onChange",
      },
    ],
  },
];

export const signUpFields = [
  {
    title: "Full Name",
    id: "name",
    type: "text",
    name: "name",
    svg: <UserSvg />,
    placeHolder: "Please enter your Full Name",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter your full name",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Email Address",
    id: "email",
    type: "text",
    name: "email",
    svg: <EmailSvg />,
    placeHolder: "Please enter your email address",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter your email address",
        validateTrigger: "onChange",
      },
      {
        type: "email",
        message: "Please enter valid e-mail",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Password",
    id: "password",
    type: "password",
    name: "password",
    svg: <PasswordSvg />,
    placeHolder: "Please enter your password",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter your password",
        validateTrigger: "onChange",
      },
    ],
  },
];

export const addListingFields = [
  {
    title: "Title",
    id: "title",
    type: "text",
    name: "title",
    // svg: <UserSvg />,
    placeHolder: "Please enter the title",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter the title",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Listing Type",
    id: "listingType",
    type: "radio",
    name: "listingType",
    // svg: <EmailSvg />,
    placeHolder: "Please enter your listing type",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter your listing type",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Description",
    id: "description",
    type: "text",
    name: "description",
    // svg: <EmailSvg />,
    placeHolder: "Please enter description",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter Description",
        validateTrigger: "onChange",
      },
    ],
  },

  {
    title: "Price",
    id: "price",
    type: "number",
    name: "price",
    // svg: <EmailSvg />,
    placeHolder: "Please enter price of your listing",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter price of your listing",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Phone Number",
    id: "phoneNumber",
    type: "text",
    name: "phoneNumber",
    // svg: <EmailSvg />,
    placeHolder: "Please enter your phone number",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter your phone number",
        validateTrigger: "onChange",
      },
    ],
  },

  {
    title: "Address",
    id: "address",
    type: "text",
    name: "address",
    // svg: <EmailSvg />,
    placeHolder: "Please enter  your address",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter  your address",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Location",
    id: "location",
    type: "text",
    name: "location",
    // svg: <EmailSvg />,
    placeHolder: "Please enter  your location",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter  your location",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Amenities",
    id: "amenities",
    type: "select",
    name: "amenities",
    // svg: <EmailSvg />,
    placeHolder: "Please add  amenities",
    required: true,
    rules: [
      {
        message: "Please add   amenities",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Image",
    id: "image",
    type: "image",
    name: "image",
    // svg: <EmailSvg />,
    placeHolder: "Please add an image",
    required: true,
    rules: [
      {
        required: true,
        message: "Please add an image",
        validateTrigger: "onChange",
      },
    ],
  },
];

export const enquiryFields = [
  {
    title: "Email Address",
    id: "email",
    type: "text",
    name: "email",
    svg: <EmailSvg />,
    placeHolder: "Please enter your email address",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter your email address",
        validateTrigger: "onChange",
      },
      {
        type: "email",
        message: "Please enter valid e-mail",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Description",
    id: "description",
    type: "text",
    name: "description",
    svg: <PasswordSvg />,
    placeHolder: "Please describe your query",
    required: true,
    rules: [
      {
        required: true,
        message: "Please describe your query",
        validateTrigger: "onChange",
      },
    ],
  },
];


export const editListingFields = [
  {
    title: "Title",
    id: "title",
    type: "text",
    name: "title",
    // svg: <UserSvg />,
    placeHolder: "Please enter the title",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter the title",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Listing Type",
    id: "listingType",
    type: "radio",
    name: "listingType",
    // svg: <EmailSvg />,
    placeHolder: "Please enter your listing type",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter your listing type",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Description",
    id: "description",
    type: "text",
    name: "description",
    // svg: <EmailSvg />,
    placeHolder: "Please enter description",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter Description",
        validateTrigger: "onChange",
      },
    ],
  },

  {
    title: "Price",
    id: "price",
    type: "number",
    name: "price",
    // svg: <EmailSvg />,
    placeHolder: "Please enter price of your listing",
    rules: [
      // {
      //   required: true,
      //   message: "Please enter price of your listing",
      //   validateTrigger: "onChange",
      // },
    ],
  },
  {
    title: "Phone Number",
    id: "phoneNumber",
    type: "text",
    name: "phoneNumber",
    // svg: <EmailSvg />,
    placeHolder: "Please enter your phone number",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter your phone number",
        validateTrigger: "onChange",
      },
    ],
  },

  {
    title: "Address",
    id: "address",
    type: "text",
    name: "address",
    // svg: <EmailSvg />,
    placeHolder: "Please enter  your address",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter  your address",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Location",
    id: "location",
    type: "text",
    name: "location",
    // svg: <EmailSvg />,
    placeHolder: "Please enter  your location",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter  your location",
        validateTrigger: "onChange",
      },
    ],
  },
  {
    title: "Amenities",
    id: "amenities",
    type: "select",
    name: "amenities",
    // svg: <EmailSvg />,
    placeHolder: "Please add  amenities",
    // required: true,
    // rules: [
    //   {
    //     message: "Please add   amenities",
    //     validateTrigger: "onChange",
    //   },
    // ],
  },
  {
    title: "Image",
    id: "image",
    type: "image",
    name: "image",
    // svg: <EmailSvg />,
    placeHolder: "Please add an image",
    required: true,
    rules: [
      {
        required: true,
        message: "Please add an image",
        validateTrigger: "onChange",
      },
    ],
  },
];
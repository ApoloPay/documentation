import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "gateway/apolopay-gateway-payment-button",
    },
    {
      type: "category",
      label: "App",
      items: [
        {
          type: "doc",
          id: "gateway/app-controller-get-hello",
          label: "Health Check",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "micro-payment-button",
      items: [
        {
          type: "doc",
          id: "gateway/micro-payment-button-controller-get-assets",
          label: "Get Assets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "gateway/micro-payment-button-controller-create-preorder",
          label: "Create Preorder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "gateway/micro-payment-button-controller-confirm-process",
          label: "Confirm Process",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

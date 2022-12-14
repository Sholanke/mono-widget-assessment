import React from "react";
import { BaseModalHeader } from "../../../ui/baseModalHeader";
import { GATEWAY_SCREEN_KEYS } from "../constants/gateway";
import { generateHeaderStyles } from "../utils/gateway";
import GatewayDynamicForm from "./GatewayDynamicForm";

export default function GatewayLogin({
  goToScreen,
  activeAuthMethod,
  activeInstitution,
  handleSubmitAuthForm,
  closeGatewayModal,
  authenticationFormData,
  handleAuthFormFieldChange,
  authenticating,
  institutionThemeStyles,
}) {
  const authMethodFormConfig = activeAuthMethod?.ui?.form;

  return (
    <div className="gateway-auth" style={institutionThemeStyles}>
      <div
        className="gateway-auth__header"
        style={generateHeaderStyles(authenticating)}
      >
        <BaseModalHeader
          onBack={() => goToScreen(GATEWAY_SCREEN_KEYS.SELECT_INSTITUTION)}
          onClose={closeGatewayModal}
        >
          <img
            className="gateway-auth__header__icon"
            alt="financial institution icon"
            src={activeInstitution?.icon}
          />
        </BaseModalHeader>
        <p className="gateway-auth__header__title fade-right">Login</p>
      </div>

      <div className="gateway-auth__form fade-right">
        <GatewayDynamicForm
          {...{
            loading: authenticating,
            formData: authenticationFormData,
            handleSubmit: handleSubmitAuthForm,
            formConfig: authMethodFormConfig,
            handleFormFieldChange: handleAuthFormFieldChange,
            institutionThemeStyles,
          }}
        />
      </div>
    </div>
  );
}

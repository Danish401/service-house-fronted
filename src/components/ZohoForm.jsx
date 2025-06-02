// src/components/ZohoForm.jsx
import React, { useEffect } from "react";

const ZohoForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=14061ab325c122ecdb716ed7a8d4270d62c5c44e6f9d2884fd6f855b5ba5a26f7c30d74b516a5e883fc479181fe19302gid855fde812605f3e731cfd8a6717935e9468d0e9bdd6d6a521b799c5552cc4636gida878c8a374a3ca3dda17509728e83d251b447903c87ac89d8889af6e7e28fa15gid57c48315c724e0f38a55b6208e93c60caa053a7838aeffde401011578e1f38bc&tw=1130996ad66fa739e75ffae32b6ac7e844b52166491e23051d9022b2f68f5de2";
    script.id = "wf_anal";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          ${document.getElementById("crmWebToEntityForm")?.outerHTML || `<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'>${document.body.innerHTML}</div>`}
        `,
      }}
    />
  );
};

export default ZohoForm;

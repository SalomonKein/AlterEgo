import React from "react";
import Tooltip from "@mui/material/Tooltip";
import cookies from "js-cookie";
import i18next from "i18next";
import { Button } from "@mui/material";

export default function LangLocalizations() {
  const languages = [
    {
      code: "en",
      country_code: "gb",
      name: "English",
    },
    {
      code: "ua",
      country_code: "ua",
      name: "Ukraine",
    },
  ];

  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div>
      {languages.map(({ code, name, country_code }) => (
        <Tooltip key={code} title={name} arrow placement="bottom">
          <Button
            variant="outlined"
            color="inherit"
            sx={{ ml: 1 }}
            style={{
              backgroundColor:
                currentLanguageCode === code ? "#0080ff" : "#1976d2",
              border:
                currentLanguageCode === code ? "1px solid #989898" : "#F8F8F8",
            }}
            onClick={() => {
              i18next.changeLanguage(code);
            }}
          >
            {code}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}

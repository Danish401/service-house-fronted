// import React from 'react';

// const ZohoLeadForm = () => {
//   const handleSubmit = (e) => {
//     e.target.charset = 'UTF-8';
//     if (!checkMandatoryFields()) {
//       e.preventDefault();
//     }
//   };

//   const checkMandatoryFields = () => {
//     const form = document.forms['WebToLeads935690000000514003'];
//     const mndFields = ['First Name', 'Last Name', 'Email'];
//     const fldLangVal = ['First Name', 'Last Name', 'Email'];

//     for (let i = 0; i < mndFields.length; i++) {
//       const fieldObj = form[mndFields[i]];
//       if (fieldObj && fieldObj.value.trim().length === 0) {
//         alert(`${fldLangVal[i]} cannot be empty.`);
//         fieldObj.focus();
//         return false;
//       }
//     }
//     return true;
//   };

//   return (
//     <div
//       id="crmWebToEntityForm"
//       className="zcwf_lblLeft crmWebToEntityForm"
//       style={{
//         backgroundColor: 'white',
//         color: 'black',
//         maxWidth: '600px',
//       }}
//     >
//       <form
//         id="webform935690000000514003"
//         action="https://crm.zoho.in/crm/WebToLeadForm"
//         name="WebToLeads935690000000514003"
//         method="POST"
//         onSubmit={handleSubmit}
//         acceptCharset="UTF-8"
//       >
//         {/* Hidden Inputs (do not modify) */}
//         <input type="hidden" name="xnQsjsdp" value="c187a97825ba94b944a3a832cf5c4cf694013e3fb06bccddfa06be4dc6cba25c" />
//         <input type="hidden" name="zc_gad" id="zc_gad" value="" />
//         <input type="hidden" name="xmIwtLD" value="870d63d220795dae3f87a64ebf007e9d5cc5b25aee993ccac5170303d716b809114547c5f930fa6ef173f9ac9d6d505a" />
//         <input type="hidden" name="actionType" value="TGVhZHM=" />
//         <input type="hidden" name="returnURL" value="https://your-website.com/thank-you" />

//         <div className="zcwf_title" style={{ color: 'black', fontFamily: 'Arial' }}>
//           Customer Details
//         </div>

//         {/* First Name */}
//         <div className="zcwf_row">
//           <div className="zcwf_col_lab">
//             <label htmlFor="First_Name">First Name <span style={{ color: 'red' }}>*</span></label>
//           </div>
//           <div className="zcwf_col_fld">
//             <input type="text" id="First_Name" name="First Name" maxLength="40" required />
//           </div>
//         </div>

//         {/* Last Name */}
//         <div className="zcwf_row">
//           <div className="zcwf_col_lab">
//             <label htmlFor="Last_Name">Last Name <span style={{ color: 'red' }}>*</span></label>
//           </div>
//           <div className="zcwf_col_fld">
//             <input type="text" id="Last_Name" name="Last Name" maxLength="80" required />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="zcwf_row">
//           <div className="zcwf_col_lab">
//             <label htmlFor="Email">Email <span style={{ color: 'red' }}>*</span></label>
//           </div>
//           <div className="zcwf_col_fld">
//             <input type="email" id="Email" name="Email" maxLength="100" required />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="zcwf_row">
//           <div className="zcwf_col_lab"></div>
//           <div className="zcwf_col_fld">
//             <input type="submit" className="formsubmit zcwf_button" value="Submit" title="Submit" />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ZohoLeadForm;

import React from "react";
import { Box, Button, TextField, Typography, Paper, Grid } from "@mui/material";

const ZohoLeadForm = () => {
  const handleSubmit = (e) => {
    e.target.charset = "UTF-8";
    if (!checkMandatoryFields()) {
      e.preventDefault();
    }
  };

  const checkMandatoryFields = () => {
    const form = document.forms["WebToLeads935690000000514003"];
    const mndFields = ["First Name", "Last Name", "Email", "Phone", "Company"];
    const fldLangVal = ["First Name", "Last Name", "Email", "Phone", "Company"];

    for (let i = 0; i < mndFields.length; i++) {
      const fieldObj = form[mndFields[i]];
      if (fieldObj && fieldObj.value.trim().length === 0) {
        alert(`${fldLangVal[i]} cannot be empty.`);
        fieldObj.focus();
        return false;
      }
    }
    return true;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f3f4f6",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          width: "100%",
          p: 4,
          borderRadius: 4,
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#5B5BD6",
            mb: 3,
          }}
        >
          Get in Touch
        </Typography>

        <form
          id="webform935690000000514003"
          name="WebToLeads935690000000514003"
          method="POST"
          action="https://crm.zoho.in/crm/WebToLeadForm"
          onSubmit={handleSubmit}
          acceptCharset="UTF-8"
        >
          {/* Hidden Inputs */}
          <input
            type="hidden"
            name="xnQsjsdp"
            value="c187a97825ba94b944a3a832cf5c4cf694013e3fb06bccddfa06be4dc6cba25c"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input
            type="hidden"
            name="xmIwtLD"
            value="870d63d220795dae3f87a64ebf007e9d5cc5b25aee993ccac5170303d716b809114547c5f930fa6ef173f9ac9d6d505a"
          />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input
            type="hidden"
            name="returnURL"
            value="https://your-website.com/thank-you"
          />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="First Name"
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="Last Name"
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email"
                name="Email"
                type="email"
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Phone"
                name="Phone"
                type="tel"
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField label="Company" name="Company" fullWidth required />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#5B5BD6",
                  color: "#fff",
                  py: 1.2,
                  fontWeight: "bold",
                  borderRadius: "30px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#4a4ac4",
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ZohoLeadForm;

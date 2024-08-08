const mongoose = require("mongoose");
const { Schema } = mongoose;

const companyAssociationSchema = new Schema(
  {
    is_company_association: { type: String, required: true },
    company_profile: 
      {
        company_name: { type: String, required: true },
          website: { type: String, required: true },
          email: { type: String, required: true },
          address: { type: String, required: true },
          city: { type: String, required: true },
          country: { type: String, required: true },

      },
      director_details: 
      {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
          mobile: { type: String, required: true },
         

      }, 
      staff_details: 
      {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
          mobile: { type: String, required: true },
        staff_type: { type: String, required: true },
          last_login: { type: String, required: true },
      },  
    documents: [
        { type: String, required: true }
    ],
    bank_account_details: [
      {
        bank_name: { type: String, required: true },
        beneficiary_name: { type: String, required: true },
        bank_account_number: { type: String, required: true },
        sort_code: { type: String, required: true },
        bic_swift_code: { type: String, required: true },
        iban_number: { type: String, required: true },
        bac_ifsc_code: { type: String, required: true },
        bank_address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        postal_code: { type: String, required: true },
     
      },

    ],
   
  },
  { timestamps: true }
);

const personalDetailsSchema = new Schema(
  {
    personal_detail: {
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      date_of_birth: { type: String, required: true },
      email_address: { type: String, required: true },
      phone_number: { type: String, required: true },
      gender: { type: String, required: true },
      country: { type: String, required: true },
      full_address: { type: String, required: true },
    },

  },
  { timestamps: true }
);
const agentInfoSchema = new Schema(
  {
    
    personal_details: { type: [personalDetailsSchema] },
    company_association_details: { type: companyAssociationSchema },
  },
  { timestamps: true }
);
const AgentSchema = new mongoose.Schema(
  {
    complete_agentInfo: [{ type: agentInfoSchema, required: true }],
  },
  { timestamps: true } 
);

exports.AgentInfo = mongoose.model("AgentInfo", AgentSchema);


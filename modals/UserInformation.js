const mongoose = require("mongoose");
const { Schema } = mongoose;

const declarationSchema = new Schema(
  {
    status: { type: String, required: true },
    declaration: { type: String, required: true },
  },
  { timestamps: true }
);

const choicesSchema = new Schema(
  {
    country: { type: String, required: true },
    city: { type: String, required: true },
    discipline: { type: String, required: true },
    program_type: { type: String, required: true },
    degree_awards: { type: String, required: true },
    university: { type: String, required: true },
    intake: { type: String, required: true },
    course_link: { type: String, required: true },
    course_code: { type: String },
  },
  { timestamps: true }
);
const employmentInfoSchema = new Schema(
  {
    job_title: { type: String, required: true },
    organization_title: { type: String, required: true },
    from: { type: String, required: true },
    mobile_no: { type: String, required: true },
    organization_address: { type: String, required: true },
  },
  { timestamps: true }
);


const documentsSchema = new Schema(
  {
    resume_cv: [{ type: String, required: true }],
    passport_copy: [{ type: String, required: true }],
    disability: [{ type: String, required: true }],
    diplomas_others_certification: [{ type: String, required: true }],
    post_admission_brp: [{ type: String, required: true }],
    purpose_statement: [{ type: String, required: true }],
    degree_pgprovisional: [{ type: String, required: true }],
    english_test: [{ type: String, required: true }],
    transcript: [{ type: String, required: true }],
    eu_settle_docs: [{ type: String, required: true }],
    reference_letter: [{ type: String, required: true }],
    ug_provisional_degree: [{ type: String, required: true }],
    visa_refusal: [{ type: String, required: true }],
    work_experience: [{ type: String, required: true }],
  },
  { timestamps: true }
);
const RefrencesSchema = new Schema(
  {
          referee_no: { type: String, required: true },
          referee_name: { type: String, required: true },
          referee_position: { type: String, required: true },
          referee_title: { type: String, required: true },
          email: { type: String, required: true },
          relation_duration: { type: String, required: true },
          mobile: { type: String, required: true },
          relation: { type: String, required: true },
          institution_name: { type: String, required: true },
          instituition_address: { type: String, required: true },
  },
  { timestamps: true }
);
const travelandImmigrationSchema = new Schema(
  {
    travel_history: [
        {
          appearance_status: { type: String, required: true },
            date_arrival: { type: String, required: true },
            date_departure: { type: String, required: true },
            vise_start_date: { type: String, required: true },
            date_arrival: { type: String, required: true },
            purpose_visit: { type: String, required: true },
            country: { type: String, required: true },
            visa_type: { type: String, required: true },

        },
      ],
    immigration_history: [{ type: String, required: true }],
    visa_rejection: [
      {
        rejection_status: { type: String, required: true },
          refusal_type: { type: String, required: true },
          date_refusal: { type: String, required: true },
          country: { type: String, required: true },
          visa_type: { type: String, required: true },
          details: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const educationSchema = new Schema(
  {
    destination_countries: [{ type: String, required: true }],
    english_lang_standarized_test: [
      {
        appearance_status: { type: String, required: true },
        test_details: {
          test_name: { type: String, required: true },
          test_date: { type: String, required: true },
          score: { type: String, required: true },
        },
      },
    ],
    others_lang_standarized_test: [
      {
        appearance_status: { type: String, required: true },
        test_details: {
          test_name: { type: String, required: true },
          test_date: { type: String, required: true },
          score: { type: String, required: true },
        },
      },
    ],
    academic_interst: [
      {
        level_of_study: { type: String, required: true },
        dicipline: { type: String, required: true },
        programme: { type: String, required: true },
        location: { type: String, required: true },
        start_date: { type: String, required: true },
      },
    ],
    academic_history: [
        {
          country: { type: String, required: true },
          institution: { type: String, required: true },
          course: { type: String, required: true },
          start_date: { type: String, required: true },
          level_of_study: { type: String, required: true },
          end_date: { type: String, required: true },
          result_info_prct: { type: String, required: true },
          result_info_gpa: { type: String, required: true },
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
      birth_country: { type: String, required: true },
      native_language: { type: String, required: true },
      passport_name: { type: String, required: true },
      passport_issue_location: { type: String, required: true },
      passport_number: { type: String, required: true },
      passport_issue_date: { type: String, required: true },
      passport_expiry_date: { type: String, required: true },
    },
    permanent_address: {
      residence_country: { type: String, required: true },
      address_one: { type: String, required: true },
      address_two: { type: String, required: true },
      postal_code: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
    },
    current_address: {
      residence_country: { type: String, required: true },
      address_one: { type: String, required: true },
      address_two: { type: String, required: true },
      postal_code: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
    },
  },
  { timestamps: true }
);
const userInfoSchema = new Schema(
  {
    personal_details: { type: personalDetailsSchema },
    education: { type: educationSchema },
    travel_and_immigration: { type: travelandImmigrationSchema },
    refrences: { type: [RefrencesSchema] },
    emplyment_info: { type: [employmentInfoSchema] },
    documents: { type: documentsSchema },
    choices: { type: [choicesSchema] },
    declaration: { type: declarationSchema },
  },
  { timestamps: true }
);
const UserInformationSchema = new mongoose.Schema(
  {
    complete_userInfo: { type: userInfoSchema, required: true },
  },
  { timestamps: true }
);


exports.UserInformation = mongoose.model(
  "UserInformation",
  UserInformationSchema
);

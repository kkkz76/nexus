import {
  CONNECTION_REQUEST_STATUS,
  ConnectionRequest,
  Contact,
  CONTACT_TAG_TYPE,
} from "@/lib/type";

export interface ContactWithDetails extends Contact {
  contactPersonFullname: string;
  contactPersonOccupation: string;
  contactPersonCompany: string;
  contactPersonImage: string;
}

export async function fetchContactData(): Promise<ContactWithDetails[]> {
  //need to combine first,middle and last name to fullname
  return data;
}

export interface ConnectionRequestWithDetails extends ConnectionRequest {
  senderFullname: string;
  senderOccupation: string;
  senderCompany: string;
  senderImage: string;
}

export async function fetchConnectionRequestData(): Promise<
  ConnectionRequestWithDetails[]
> {
  //need to combine first,middle and last name to fullname
  return detailsContact;
}

// Create dummy data for the connection requests with sender details
const detailsContact: ConnectionRequestWithDetails[] = [
  {
    requestID: "1",
    senderCardID: "1",
    recieverCardID: "202",
    status: CONNECTION_REQUEST_STATUS.PENDING,
    created_at: new Date("2024-11-01T08:00:00Z"),
    updated_at: new Date("2024-11-01T08:00:00Z"),
    senderFullname: "John",
    senderOccupation: "Software Engineer",
    senderCompany: "Tech Corp",
    senderImage: "",
  },
  {
    requestID: "2",
    senderCardID: "2",
    recieverCardID: "203",
    status: CONNECTION_REQUEST_STATUS.ACCEPTED,
    created_at: new Date("2024-11-02T09:30:00Z"),
    updated_at: new Date("2024-11-02T09:35:00Z"),
    senderFullname: "Jane",
    senderOccupation: "Product Manager",
    senderCompany: "Innovate Inc.",
    senderImage: "",
  },
  {
    requestID: "3",
    senderCardID: "3",
    recieverCardID: "204",
    status: CONNECTION_REQUEST_STATUS.REJECTED,
    created_at: new Date("2024-11-03T10:00:00Z"),
    updated_at: new Date("2024-11-03T10:05:00Z"),
    senderFullname: "Michael",
    senderOccupation: "Data Scientist",
    senderCompany: "DataLab",
    senderImage: "",
  },
  {
    requestID: "4",
    senderCardID: "104",
    recieverCardID: "205",
    status: CONNECTION_REQUEST_STATUS.PENDING,
    created_at: new Date("2024-11-04T11:00:00Z"),
    updated_at: new Date("2024-11-04T11:05:00Z"),
    senderFullname: "Alice",
    senderOccupation: "Marketing Lead",
    senderCompany: "BrandCo",
    senderImage: "",
  },
  {
    requestID: "5",
    senderCardID: "105",
    recieverCardID: "206",
    status: CONNECTION_REQUEST_STATUS.ACCEPTED,
    created_at: new Date("2024-11-05T12:30:00Z"),
    updated_at: new Date("2024-11-05T12:35:00Z"),
    senderFullname: "Robert",
    senderOccupation: "UX Designer",
    senderCompany: "Designify",
    senderImage: "",
  },
];

const data: ContactWithDetails[] = [
  {
    contactID: "1",
    userCardID: "1",
    contactPersonCardID: "1",
    contactPersonID: "1",
    contactPersonFullname: "John",
    contactPersonOccupation: "Software Engineer",
    contactPersonCompany: "Tech Innovators Ltd.",
    contactPersonImage: "",
    created_at: new Date("2023-01-15T10:30:00"),
    updated_at: new Date("2023-01-15T10:30:00"),
    tag: CONTACT_TAG_TYPE.FAMILY,
    note: "SIM student",
  },
  {
    contactID: "3",
    userCardID: "1",
    contactPersonCardID: "1",
    contactPersonID: "1",
    contactPersonFullname: "Alice",
    contactPersonOccupation: "Marketing Manager",
    contactPersonCompany: "Creative Solutions",
    contactPersonImage: "",
    created_at: new Date("2023-01-16T14:00:00"),
    updated_at: new Date("2023-01-16T14:00:00"),
    tag: CONTACT_TAG_TYPE.FRIEND,
  },
  {
    contactID: "2",
    userCardID: "1",
    contactPersonCardID: "2",
    contactPersonID: "2",
    contactPersonFullname: "Robert",
    contactPersonOccupation: "Product Designer",
    contactPersonCompany: "Design Co.",
    contactPersonImage: "",
    created_at: new Date("2023-01-17T16:30:00"),
    updated_at: new Date("2023-01-17T16:30:00"),
    tag: CONTACT_TAG_TYPE.COLLEAGUE,
    note: "SIM student",
  },
  {
    contactID: "4",
    userCardID: "1",
    contactPersonCardID: "3",
    contactPersonID: "3",
    contactPersonFullname: "Emily",
    contactPersonOccupation: "Software Architect",
    contactPersonCompany: "Tech Pioneers",
    contactPersonImage: "",
    created_at: new Date("2023-01-18T09:00:00"),
    updated_at: new Date("2023-01-18T09:00:00"),
    tag: CONTACT_TAG_TYPE.CLIENT,
    note: "SIM student",
  },
  {
    contactID: "5",
    userCardID: "1",
    contactPersonCardID: "4",
    contactPersonID: "4",
    contactPersonFullname: "David",
    contactPersonOccupation: "Operations Manager",
    contactPersonCompany: "SupplyChain Solutions",
    contactPersonImage: "",
    created_at: new Date("2023-02-01T11:30:00"),
    updated_at: new Date("2023-02-01T11:30:00"),
    tag: CONTACT_TAG_TYPE.SUPPLIER,
    note: "SIM student",
  },
  {
    contactID: "6",
    userCardID: "1",
    contactPersonCardID: "5",
    contactPersonID: "5",
    contactPersonFullname: "Sarah",
    contactPersonOccupation: "Business Analyst",
    contactPersonCompany: "Enterprise Consulting",
    contactPersonImage: "",
    created_at: new Date("2023-02-05T10:45:00"),
    updated_at: new Date("2023-02-05T10:45:00"),
    tag: CONTACT_TAG_TYPE.INVESTOR,
    note: "SIM student",
  },
  {
    contactID: "7",
    userCardID: "1",
    contactPersonCardID: "6",
    contactPersonID: "6",
    contactPersonFullname: "Michael",
    contactPersonOccupation: "Legal Counsel",
    contactPersonCompany: "Lawyers United",
    contactPersonImage: "",
    created_at: new Date("2023-02-10T12:30:00"),
    updated_at: new Date("2023-02-10T12:30:00"),
    tag: CONTACT_TAG_TYPE.EMPLOYEE,
    note: "SIM student",
  },
  {
    contactID: "8",
    userCardID: "1",
    contactPersonCardID: "7",
    contactPersonID: "7",
    contactPersonFullname: "Olivia",
    contactPersonOccupation: "Data Scientist",
    contactPersonCompany: "Data Insights",
    contactPersonImage: "",
    created_at: new Date("2023-02-15T13:00:00"),
    updated_at: new Date("2023-02-15T13:00:00"),
    tag: CONTACT_TAG_TYPE.VENDOR,
    note: "SIM student",
  },
  {
    contactID: "9",
    userCardID: "1",
    contactPersonCardID: "8",
    contactPersonID: "8",
    contactPersonFullname: "Sophia",
    contactPersonOccupation: "Chief Technology Officer",
    contactPersonCompany: "Tech Enterprises",
    contactPersonImage: "",
    created_at: new Date("2023-03-01T09:30:00"),
    updated_at: new Date("2023-03-01T09:30:00"),
    tag: CONTACT_TAG_TYPE.FAMILY,
    note: "SIM student",
  },
  {
    contactID: "10",
    userCardID: "1",
    contactPersonCardID: "9",
    contactPersonID: "9",
    contactPersonFullname: "Lucas",
    contactPersonOccupation: "Customer Support Lead",
    contactPersonCompany: "SupportNow",
    contactPersonImage: "",
    created_at: new Date("2023-03-05T11:15:00"),
    updated_at: new Date("2023-03-05T11:15:00"),
    tag: CONTACT_TAG_TYPE.FRIEND,
    note: "SIM student",
  },
  {
    contactID: "11",
    userCardID: "1",
    contactPersonCardID: "10",
    contactPersonID: "10",
    contactPersonFullname: "Grace",
    contactPersonOccupation: "HR Director",
    contactPersonCompany: "Global Enterprises",
    contactPersonImage: "",
    created_at: new Date("2023-03-07T15:00:00"),
    updated_at: new Date("2023-03-07T15:00:00"),
    tag: CONTACT_TAG_TYPE.COLLEAGUE,
    note: "SIM student",
  },
  {
    contactID: "12",
    userCardID: "1",
    contactPersonCardID: "11",
    contactPersonID: "11",
    contactPersonFullname: "Daniel",
    contactPersonOccupation: "UI/UX Designer",
    contactPersonCompany: "Creative Vision",
    contactPersonImage: "",
    created_at: new Date("2023-03-10T17:45:00"),
    updated_at: new Date("2023-03-10T17:45:00"),
    tag: CONTACT_TAG_TYPE.CLIENT,
    note: "SIM student",
  },
  {
    contactID: "13",
    userCardID: "1",
    contactPersonCardID: "12",
    contactPersonID: "12",
    contactPersonFullname: "Ella",
    contactPersonOccupation: "Financial Analyst",
    contactPersonCompany: "FinCorp",
    contactPersonImage: "",
    created_at: new Date("2023-03-15T10:00:00"),
    updated_at: new Date("2023-03-15T10:00:00"),
    tag: CONTACT_TAG_TYPE.SUPPLIER,
    note: "SIM student",
  },
  {
    contactID: "14",
    userCardID: "1",
    contactPersonCardID: "13",
    contactPersonID: "13",
    contactPersonFullname: "James",
    contactPersonOccupation: "Business Consultant",
    contactPersonCompany: "ConsultPro",
    contactPersonImage: "",
    created_at: new Date("2023-03-20T12:30:00"),
    updated_at: new Date("2023-03-20T12:30:00"),
    tag: CONTACT_TAG_TYPE.INVESTOR,
    note: "SIM student",
  },
];

export default interface ITemplateProps {
  data: {
    firstName: string;
    lastName: string;
    position: string;
    yearsOfExperience: string;
    email: string;
    phone: string;
    linkedIn: string;
    location: string;
    summary: string;
    workExperiences: {
      company: string;
      jobTitle: string;
      date: string;
      description: string;
    }[];
  };
}

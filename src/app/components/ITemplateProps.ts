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
    educations: {
      school: string;
      schoolDate: string;
      degreeAndMajor: string;
      GPA: string;
      achievements: string;
    }[];
    skills: {
      name: string;
      strength: number;
    }[];
    selectedColor: string | null;
    selectedFont: string;
  };
}

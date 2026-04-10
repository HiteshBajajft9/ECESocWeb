export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  social: {
    instagram?: string;
    github?: string;
    gmail?: string;
    linkedin?: string;
  };
}

export const facultyAdvisors: TeamMember[] = [
  {
    name: "Arnav Srivastava",
    role: "Faculty Advisor",
    photo: "/teams/Arnav.png",
    social: {
      gmail: "john.doe@college.edu",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "Dr. Priya Verma",
    role: "Faculty Advisor",
    photo: "/team/faculty2.jpg",
    social: {
      gmail: "priya.verma@college.edu",
      linkedin: "https://linkedin.com/in/priyaverma",
    },
  },
  {
    name: "Dr. Arun Khanna",
    role: "Faculty Advisor",
    photo: "/team/faculty3.jpg",
    social: {
      gmail: "arun.khanna@college.edu",
      linkedin: "https://linkedin.com/in/arunkhanna",
    },
  },
];

export const leadershipBody: TeamMember[] = [
  {
    name: "Ananya Rao",
    role: "Leadership Coordinator",
    photo: "/teams/Arnav.png",
    social: {
      instagram: "https://instagram.com/ananya.rao",
      github: "https://github.com/ananyar",
      linkedin: "https://linkedin.com/in/ananyar",
    },
  },
  {
    name: "Rohan Iyer",
    role: "Operations Head",
    photo: "/team/leadership2.jpg",
    social: {
      instagram: "https://instagram.com/rohan.iyer",
      github: "https://github.com/rohaniyer",
      linkedin: "https://linkedin.com/in/rohaniyer",
    },
  },
  {
    name: "Maya Singh",
    role: "Outreach Lead",
    photo: "/team/leadership3.jpg",
    social: {
      instagram: "https://instagram.com/maya.singh",
      github: "https://github.com/mayasingh",
      linkedin: "https://linkedin.com/in/mayasingh",
    },
  },
  {
    name: "Kartik Mehta",
    role: "Program Head",
    photo: "/team/leadership4.jpg",
    social: {
      instagram: "https://instagram.com/kartik.mehta",
      github: "https://github.com/kartikmehta",
      linkedin: "https://linkedin.com/in/kartikmehta",
    },
  },
  {
    name: "Sanya Patel",
    role: "Design Head",
    photo: "/team/leadership5.jpg",
    social: {
      instagram: "https://instagram.com/sanya.patel",
      github: "https://github.com/sanyapatel",
      linkedin: "https://linkedin.com/in/sanyapatel",
    },
  },
  {
    name: "Nikhil Sharma",
    role: "PR Head",
    photo: "/team/leadership6.jpg",
    social: {
      instagram: "https://instagram.com/nikhil.sharma",
      github: "https://github.com/nikhilsharma",
      linkedin: "https://linkedin.com/in/nikhilsharma",
    },
  },
  {
    name: "Riya Kapoor",
    role: "Strategy Head",
    photo: "/team/leadership7.jpg",
    social: {
      instagram: "https://instagram.com/riya.kapoor",
      github: "https://github.com/riyakapoor",
      linkedin: "https://linkedin.com/in/riyakapoor",
    },
  },
  {
    name: "Aditya Bose",
    role: "Finance Head",
    photo: "/team/leadership8.jpg",
    social: {
      instagram: "https://instagram.com/aditya.bose",
      github: "https://github.com/adityabose",
      linkedin: "https://linkedin.com/in/adityabose",
    },
  },
];

export const executives: TeamMember[] = [
  {
    name: "Jane Smith",
    role: "President",
    photo: "/team/exec1.jpg",
    social: {
      instagram: "https://instagram.com/janesmith",
      github: "https://github.com/janesmith",
      gmail: "jane.smith@college.edu",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    name: "Arjun Bose",
    role: "Vice President",
    photo: "/team/exec2.jpg",
    social: {
      instagram: "https://instagram.com/arjun.bose",
      github: "https://github.com/arjunbose",
      linkedin: "https://linkedin.com/in/arjunbose",
    },
  },
  {
    name: "Sneha Gupta",
    role: "Secretary",
    photo: "/team/exec3.jpg",
    social: {
      instagram: "https://instagram.com/sneha.gupta",
      github: "https://github.com/snehagupta",
      linkedin: "https://linkedin.com/in/snehagupta",
    },
  },
  {
    name: "Vikram Patel",
    role: "Treasurer",
    photo: "/team/exec4.jpg",
    social: {
      instagram: "https://instagram.com/vikram.patel",
      github: "https://github.com/vikrampatel",
      linkedin: "https://linkedin.com/in/vikrampatel",
    },
  },
  {
    name: "Elaine Thomas",
    role: "Events Head",
    photo: "/team/exec5.jpg",
    social: {
      instagram: "https://instagram.com/elaine.thomas",
      github: "https://github.com/elainethomas",
      linkedin: "https://linkedin.com/in/elainethomas",
    },
  },
  {
    name: "Kabir Shah",
    role: "Technical Lead",
    photo: "/team/exec6.jpg",
    social: {
      instagram: "https://instagram.com/kabir.shah",
      github: "https://github.com/kabirshah",
      linkedin: "https://linkedin.com/in/kabirshah",
    },
  },
  {
    name: "Priya Nair",
    role: "Design Lead",
    photo: "/team/exec7.jpg",
    social: {
      instagram: "https://instagram.com/priya.nair",
      github: "https://github.com/priyanair",
      linkedin: "https://linkedin.com/in/priyanair",
    },
  },
  {
    name: "Rahul Verma",
    role: "Content Head",
    photo: "/team/exec8.jpg",
    social: {
      instagram: "https://instagram.com/rahul.verma",
      github: "https://github.com/rahulverma",
      linkedin: "https://linkedin.com/in/rahulverma",
    },
  },
];

export const contributors: TeamMember[] = [
  {
    name: "Alice Johnson",
    role: "Contributor",
    photo: "/team/contrib1.jpg",
    social: {
      instagram: "https://instagram.com/alicejohnson",
      github: "https://github.com/alicejohnson",
      gmail: "alice.johnson@college.edu",
    },
  },
  {
    name: "Karan Mehta",
    role: "Contributor",
    photo: "/team/contrib2.jpg",
    social: {
      instagram: "https://instagram.com/karan.mehta",
      github: "https://github.com/karanmehta",
    },
  },
  {
    name: "Meera Das",
    role: "Contributor",
    photo: "/team/contrib3.jpg",
    social: {
      instagram: "https://instagram.com/meera.das",
      github: "https://github.com/meerdas",
    },
  },
  {
    name: "Amit Singh",
    role: "Contributor",
    photo: "/team/contrib4.jpg",
    social: {
      instagram: "https://instagram.com/amit.singh",
      github: "https://github.com/amitsingh",
    },
  },
  {
    name: "Nina Roy",
    role: "Contributor",
    photo: "/team/contrib5.jpg",
    social: {
      instagram: "https://instagram.com/nina.roy",
      github: "https://github.com/ninaroy",
    },
  },
  {
    name: "Aditya Kumar",
    role: "Contributor",
    photo: "/team/contrib6.jpg",
    social: {
      instagram: "https://instagram.com/aditya.kumar",
      github: "https://github.com/adityakumar",
    },
  },
  {
    name: "Sakshi Jain",
    role: "Contributor",
    photo: "/team/contrib7.jpg",
    social: {
      instagram: "https://instagram.com/sakshi.jain",
      github: "https://github.com/sakshijain",
    },
  },
  {
    name: "Tarun Bhandari",
    role: "Contributor",
    photo: "/team/contrib8.jpg",
    social: {
      instagram: "https://instagram.com/tarun.bhandari",
      github: "https://github.com/tarunbhandari",
    },
  },
  {
    name: "Rhea Kapoor",
    role: "Contributor",
    photo: "/team/contrib9.jpg",
    social: {
      instagram: "https://instagram.com/rhea.kapoor",
      github: "https://github.com/rheakapoor",
    },
  },
  {
    name: "Devansh Gupta",
    role: "Contributor",
    photo: "/team/contrib10.jpg",
    social: {
      instagram: "https://instagram.com/devansh.gupta",
      github: "https://github.com/devanshgupta",
    },
  },
];

export interface HallOfFameMember {
  year: string;
  name: string;
  pastPosition: string;
  tenure: string;
  photo: string;
  social: {
    instagram?: string;
    github?: string;
    gmail?: string;
    linkedin?: string;
  };
}

export const hallOfFame: HallOfFameMember[] = [
  {
    year: "2022",
    name: "Rahul Sharma",
    pastPosition: "Former President",
    tenure: "2022",
    photo: "/teams/default.jpg",
    social: {
      linkedin: "https://linkedin.com/in/rahulsharma",
      instagram: "https://instagram.com/rahul.sharma"
    }
  },
  {
    year: "2022",
    name: "Priya Patel",
    pastPosition: "Former Vice President",
    tenure: "2022",
    photo: "/teams/default.jpg",
    social: {
      linkedin: "https://linkedin.com/in/priyapatel",
      instagram: "https://instagram.com/priya.patel"
    }
  },
  {
    year: "2021",
    name: "Amit Kumar",
    pastPosition: "Former President",
    tenure: "2021",
    photo: "/teams/default.jpg",
    social: {
      linkedin: "https://linkedin.com/in/amitkumar",
      instagram: "https://instagram.com/amit.kumar"
    }
  },
  {
    year: "2020",
    name: "Sneha Reddy",
    pastPosition: "Former President",
    tenure: "2020",
    photo: "/teams/default.jpg",
    social: {
      linkedin: "https://linkedin.com/in/snehareddy",
      instagram: "https://instagram.com/sneha.reddy"
    }
  },
  {
    year: "2019",
    name: "Vikram Singh",
    pastPosition: "Former President",
    tenure: "2019",
    photo: "/teams/default.jpg",
    social: {
      linkedin: "https://linkedin.com/in/vikramsingh",
      instagram: "https://instagram.com/vikram.singh"
    }
  },
  {
    year: "2018",
    name: "Anjali Mehta",
    pastPosition: "Former President",
    tenure: "2018",
    photo: "/teams/default.jpg",
    social: {
      linkedin: "https://linkedin.com/in/anjaliimehta",
      instagram: "https://instagram.com/anjali.mehta"
    }
  }
];
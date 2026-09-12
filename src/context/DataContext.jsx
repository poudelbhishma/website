import React, { createContext, useContext, useState, useEffect } from 'react'

const initialAboutMe = {
  role: '.NET Developer',
  company: 'Technables IT Solutions',
  startDate: '2023-10-01',
  location: 'Lalitpur, Nepal',
  stack: 'C# · .NET · MySQL · JS',
  bio: [
    "I'm Bhishma, a software engineer based in Lalitpur, Nepal. For the past couple of years I've been working at Technables IT Solutions, mostly writing backend code in C# and .NET — but I get into the frontend too when needed, usually with React and plain JavaScript.",
    "I got into programming because I liked figuring out how things work under the hood. That hasn't changed much. I still spend a fair bit of time reading docs, debugging things that break in unexpected ways, and occasionally rewriting something I thought was fine.",
    "Outside of work I keep up with what's happening in the .NET ecosystem, pick up side projects, and try to keep my GitHub somewhat active."
  ]
}

const initialExperiences = [
  {
    id: 'exp-1',
    company: 'Technables IT Solutions',
    role: 'Software Engineer',
    startDate: '2024-04-01',
    endDate: null,
    period: 'April 2024 - Present',
    location: 'Kathmandu District, Nepal',
    description: 'Full-time Software Engineer role. Working on software development, building robust and scalable applications.',
    nodeColor: 'blue',
  },
  {
    id: 'exp-2',
    company: 'Technables IT Solutions',
    role: 'Intern',
    startDate: '2023-10-01',
    endDate: '2024-04-01',
    period: 'October 2023 - April 2024',
    location: 'Kathmandu District, Nepal',
    description: 'Software development intern. Gained hands-on experience in modern software development practices, contributed to real-world projects, and developed strong technical skills.',
    nodeColor: 'green',
  },
]

const initialMyProjects = [
  {
    id: 'proj-1',
    title: 'Hajiri Management System',
    image: '/Hajiri.png',
    subtitle: '',
    description: 'Manages employee attendance through a JKteco fingerprint device. Employees can clock in and out using the FAM device. Also handles employee leave records.',
    tech: '.NET 8.0',
    darkBg: false,
    iconKey: 'faFingerprint'
  },
  {
    id: 'proj-2',
    title: 'WatchX',
    image: '/watchx.png',
    subtitle: 'E-commerce System',
    description: 'E-commerce platform with Admin, Seller, and User roles. Sellers list products, users purchase them. Includes stock/inventory management and Stripe payment processing.',
    tech: '.NET 9.0',
    darkBg: false,
    iconKey: 'faCartShopping'
  },
  {
    id: 'proj-3',
    title: 'Army Training System',
    image: '/armytraning.png',
    subtitle: '',
    description: 'E-commerce platform integrated with student performance tracking. Only enrolled students can purchase training materials online. Uses Khalti for payment processing.',
    tech: '.NET 8.0',
    darkBg: true,
    iconKey: 'faDumbbell'
  },
  {
    id: 'proj-4',
    title: 'School Management System',
    image: '/schoolmanagement.png',
    subtitle: '',
    description: 'Manages school operations including teacher management, student management, examinations, results, and other academic records.',
    tech: '',
    darkBg: false,
    iconKey: 'faSchool'
  },
]

const initialContributedProjects = [
  {
    id: 'cproj-1',
    title: 'Parking Management System',
    description: 'Developed the Admin Dashboard with complete records and reports of vehicle entry/exit, payments, and related information.',
    iconKey: 'faCar'
  },
  {
    id: 'cproj-2',
    title: 'Eyeplex Mall',
    description: 'Worked on Loyalty Management and Coupon Management coupon creation, validation, usage tracking, and loyalty member dashboard.',
    iconKey: 'faStore'
  },
  {
    id: 'cproj-3',
    title: 'Midtown Cinema',
    description: 'Built modules for user registration, employee management, manual attendance and leave by admin, AG Grid reports, and exporting data to PDF.',
    iconKey: 'faFilm'
  },
  {
    id: 'cproj-4',
    title: 'Mall Management System',
    description: 'Upgraded existing project to .NET 9.0 with updated technologies. The system manages various mall-related information and operations.',
    iconKey: 'faBuilding'
  },
]

const initialSkills = [
  { id: 'skill-1', name: '.NET', level: 85, color: '#512BD4' },
  { id: 'skill-2', name: 'JavaScript', level: 88, color: '#F7DF1E', textColor: '#EAB308' },
  { id: 'skill-3', name: 'Web Development', level: 90, color: '#2563EB' },
  { id: 'skill-4', name: 'HTML', level: 90, color: '#E34F26' },
  { id: 'skill-5', name: 'C# Entity Framework', level: 80, color: '#512BD4' },
  { id: 'skill-6', name: 'MySQL', level: 85, color: '#00758F' },
  { id: 'skill-7', name: 'CSS', level: 92, color: '#1572B6' },
  { id: 'skill-8', name: 'Agile Methodology', level: 88, color: '#0052CC' },
  { id: 'skill-9', name: 'Elastic Search', level: 72, color: '#00BFB3' },
  { id: 'skill-10', name: 'Git', level: 88, color: '#F05032' },
  { id: 'skill-11', name: 'DevOps', level: 75, color: '#0DB7ED' },
  { id: 'skill-12', name: 'APIs', level: 82, color: '#6C63FF' },
  { id: 'skill-13', name: 'SQL', level: 85, color: '#CC292B' },
  { id: 'skill-14', name: 'PHP', level: 78, color: '#777BB4' },
  { id: 'skill-15', name: 'jQuery', level: 85, color: '#0769AD' },
  { id: 'skill-16', name: 'C', level: 75, color: '#00599C' },
]

const initialEducation = [
  {
    id: 'edu-1',
    institution: 'Pokhara University',
    degree: "Bachelor's degree, Computer Software",
    period: '2019 - 2024',
    location: 'Pokhara, Nepal',
    description: "Completed Bachelor's degree in Computer Software with focus on modern software development practices, algorithms, data structures, and software engineering principles.",
    nodeColor: 'blue',
  },
  {
    id: 'edu-2',
    institution: 'Shree Rastriya Secondary School',
    degree: 'Diploma in Computer Engineering, Computer Science',
    period: '2016 - 2019',
    location: 'Kapilvastu, Nepal',
    description: 'Completed Diploma in Computer Engineering with focus on computer science fundamentals and technical education.',
    nodeColor: 'green',
  },
  {
    id: 'edu-3',
    institution: 'Shree Rastriya Secondary School',
    degree: 'Lower School',
    period: '2006 - 2016',
    location: 'Kapilvastu, Nepal',
    description: 'Completed lower school education with strong foundation in core subjects.',
    nodeColor: 'green',
  },
]

const DataContext = createContext()

export function DataProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('bhishma_portfolio_data')
      if (saved) {
        return JSON.parse(saved)
      }
    } catch (e) {
      console.error('Failed to parse saved portfolio data:', e)
    }
    return {
      aboutMe: initialAboutMe,
      experiences: initialExperiences,
      myProjects: initialMyProjects,
      contributedProjects: initialContributedProjects,
      skills: initialSkills,
      education: initialEducation,
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('bhishma_portfolio_data', JSON.stringify(data))
    } catch (e) {
      console.error('Failed to save portfolio data to localStorage:', e)
    }
  }, [data])

  // About Me Actions
  const updateAboutMe = (updatedAboutMe) => {
    setData((prev) => ({ ...prev, aboutMe: updatedAboutMe }))
  }

  // Experiences Actions
  const addExperience = (exp) => {
    const newExp = { ...exp, id: `exp-${Date.now()}` }
    setData((prev) => ({ ...prev, experiences: [newExp, ...prev.experiences] }))
  }

  const updateExperience = (id, updatedExp) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((item) => (item.id === id ? { ...updatedExp, id } : item)),
    }))
  }

  const deleteExperience = (id) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((item) => item.id !== id),
    }))
  }

  // Projects Actions
  const addProject = (proj, isContributed = false) => {
    const newProj = { ...proj, id: `proj-${Date.now()}` }
    if (isContributed) {
      setData((prev) => ({ ...prev, contributedProjects: [...prev.contributedProjects, newProj] }))
    } else {
      setData((prev) => ({ ...prev, myProjects: [...prev.myProjects, newProj] }))
    }
  }

  const updateProject = (id, updatedProj, isContributed = false) => {
    if (isContributed) {
      setData((prev) => ({
        ...prev,
        contributedProjects: prev.contributedProjects.map((item) => (item.id === id ? { ...updatedProj, id } : item)),
      }))
    } else {
      setData((prev) => ({
        ...prev,
        myProjects: prev.myProjects.map((item) => (item.id === id ? { ...updatedProj, id } : item)),
      }))
    }
  }

  const deleteProject = (id, isContributed = false) => {
    if (isContributed) {
      setData((prev) => ({
        ...prev,
        contributedProjects: prev.contributedProjects.filter((item) => item.id !== id),
      }))
    } else {
      setData((prev) => ({
        ...prev,
        myProjects: prev.myProjects.filter((item) => item.id !== id),
      }))
    }
  }

  // Skills Actions
  const addSkill = (skill) => {
    const newSkill = { ...skill, id: `skill-${Date.now()}` }
    setData((prev) => ({ ...prev, skills: [...prev.skills, newSkill] }))
  }

  const updateSkill = (id, updatedSkill) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((item) => (item.id === id ? { ...updatedSkill, id } : item)),
    }))
  }

  const deleteSkill = (id) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter((item) => item.id !== id),
    }))
  }

  // Education Actions
  const addEducation = (edu) => {
    const newEdu = { ...edu, id: `edu-${Date.now()}` }
    setData((prev) => ({ ...prev, education: [...prev.education, newEdu] }))
  }

  const updateEducation = (id, updatedEdu) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((item) => (item.id === id ? { ...updatedEdu, id } : item)),
    }))
  }

  const deleteEducation = (id) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }))
  }

  // Reordering Actions
  const reorderExperiences = (newExperiences) => {
    setData((prev) => ({ ...prev, experiences: newExperiences }))
  }

  const reorderMyProjects = (newProjects) => {
    setData((prev) => ({ ...prev, myProjects: newProjects }))
  }

  const reorderContributedProjects = (newProjects) => {
    setData((prev) => ({ ...prev, contributedProjects: newProjects }))
  }

  const reorderSkills = (newSkills) => {
    setData((prev) => ({ ...prev, skills: newSkills }))
  }

  const reorderEducation = (newEducation) => {
    setData((prev) => ({ ...prev, education: newEducation }))
  }

  // Generic move item helper
  const moveItemInList = (listKey, index, direction) => {
    const list = [...data[listKey]]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= list.length) return
    const [moved] = list.splice(index, 1)
    list.splice(targetIndex, 0, moved)
    setData((prev) => ({ ...prev, [listKey]: list }))
  }

  // Reset to Defaults
  const resetToDefaults = () => {
    const defaults = {
      aboutMe: initialAboutMe,
      experiences: initialExperiences,
      myProjects: initialMyProjects,
      contributedProjects: initialContributedProjects,
      skills: initialSkills,
      education: initialEducation,
    }
    setData(defaults)
    localStorage.setItem('bhishma_portfolio_data', JSON.stringify(defaults))
  }

  return (
    <DataContext.Provider
      value={{
        ...data,
        updateAboutMe,
        addExperience,
        updateExperience,
        deleteExperience,
        reorderExperiences,
        addProject,
        updateProject,
        deleteProject,
        reorderMyProjects,
        reorderContributedProjects,
        addSkill,
        updateSkill,
        deleteSkill,
        reorderSkills,
        addEducation,
        updateEducation,
        deleteEducation,
        reorderEducation,
        moveItemInList,
        resetToDefaults,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

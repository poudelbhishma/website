import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faBriefcase,
  faFolderOpen,
  faCode,
  faGraduationCap,
  faPlus,
  faTrash,
  faPenToSquare,
  faArrowLeft,
  faCheck,
  faXmark,
  faShieldHalved,
  faFloppyDisk,
  faLock,
  faRightFromBracket,
  faKey,
  faArrowUp,
  faArrowDown,
  faGripVertical,
} from '@fortawesome/free-solid-svg-icons'
import { useData } from '../../context/DataContext'
import { useTheme } from '../../context/ThemeContext'
import './AdminPanel.css'

function AdminPanel() {
  const {
    aboutMe,
    updateAboutMe,
    experiences,
    addExperience,
    updateExperience,
    deleteExperience,
    myProjects,
    contributedProjects,
    addProject,
    updateProject,
    deleteProject,
    skills,
    addSkill,
    updateSkill,
    deleteSkill,
    education,
    addEducation,
    updateEducation,
    deleteEducation,
    moveItemInList,
    resetToDefaults,
  } = useData()

  const { theme } = useTheme()
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_authenticated') === 'true'
  })
  const [loginUser, setLoginUser] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [loginError, setLoginError] = useState('')

  const [activeTab, setActiveTab] = useState('about')
  const [notification, setNotification] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Stored credentials or default admin / admin
    const storedUser = localStorage.getItem('admin_username') || 'admin'
    const storedPass = localStorage.getItem('admin_password') || 'Bhishma@9807'

    if (loginUser.trim() === storedUser && loginPass === storedPass) {
      sessionStorage.setItem('admin_authenticated', 'true')
      setIsAuthenticated(true)
      setLoginError('')
    } else {
      setLoginError('Invalid username or password. Please try again.')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated')
    setIsAuthenticated(false)
  }

  const showNotify = (msg) => {
    setNotification(msg)
    setTimeout(() => setNotification(''), 3000)
  }

  // --- About Me State ---
  const [aboutForm, setAboutForm] = useState({
    role: aboutMe.role || '',
    company: aboutMe.company || '',
    startDate: aboutMe.startDate || '',
    location: aboutMe.location || '',
    stack: aboutMe.stack || '',
    bioText: Array.isArray(aboutMe.bio) ? aboutMe.bio.join('\n\n') : aboutMe.bio || '',
  })

  const handleSaveAboutMe = (e) => {
    e.preventDefault()
    const paragraphs = aboutForm.bioText.split('\n\n').filter((p) => p.trim() !== '')
    updateAboutMe({
      ...aboutForm,
      bio: paragraphs,
    })
    showNotify('About Me section updated successfully!')
  }

  // --- Modal / Editing States for Other Lists ---
  const [editingExp, setEditingExp] = useState(null)
  const [expForm, setExpForm] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    period: '',
    location: '',
    description: '',
    nodeColor: 'blue',
  })

  const [editingProj, setEditingProj] = useState(null)
  const [isContributedProj, setIsContributedProj] = useState(false)
  const [projForm, setProjForm] = useState({
    title: '',
    subtitle: '',
    description: '',
    tech: '',
    image: '',
    iconKey: 'faLaptopCode',
    darkBg: false,
  })

  const [editingSkill, setEditingSkill] = useState(null)
  const [skillForm, setSkillForm] = useState({
    name: '',
    level: 80,
    color: '#2563EB',
  })

  const [editingEdu, setEditingEdu] = useState(null)
  const [eduForm, setEduForm] = useState({
    degree: '',
    institution: '',
    period: '',
    location: '',
    description: '',
    nodeColor: 'blue',
  })

  // --- Work History Actions ---
  const openExpForm = (exp = null) => {
    if (exp) {
      setEditingExp(exp.id)
      setExpForm({ ...exp, endDate: exp.endDate || '' })
    } else {
      setEditingExp('new')
      setExpForm({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        period: '',
        location: '',
        description: '',
        nodeColor: 'blue',
      })
    }
  }

  const handleSaveExp = (e) => {
    e.preventDefault()
    if (editingExp === 'new') {
      addExperience(expForm)
      showNotify('New Work Experience added!')
    } else {
      updateExperience(editingExp, expForm)
      showNotify('Work Experience updated!')
    }
    setEditingExp(null)
  }

  // --- Project Actions ---
  const openProjForm = (proj = null, contributed = false) => {
    setIsContributedProj(contributed)
    if (proj) {
      setEditingProj(proj.id)
      setProjForm({
        title: proj.title || '',
        subtitle: proj.subtitle || '',
        description: proj.description || '',
        tech: proj.tech || '',
        image: proj.image || '',
        iconKey: proj.iconKey || 'faLaptopCode',
        darkBg: !!proj.darkBg,
      })
    } else {
      setEditingProj('new')
      setProjForm({
        title: '',
        subtitle: '',
        description: '',
        tech: '',
        image: '',
        iconKey: 'faLaptopCode',
        darkBg: false,
      })
    }
  }

  const handleSaveProj = (e) => {
    e.preventDefault()
    if (editingProj === 'new') {
      addProject(projForm, isContributedProj)
      showNotify('New Project added!')
    } else {
      updateProject(editingProj, projForm, isContributedProj)
      showNotify('Project updated!')
    }
    setEditingProj(null)
  }

  // --- Skill Actions ---
  const openSkillForm = (skill = null) => {
    if (skill) {
      setEditingSkill(skill.id)
      setSkillForm({
        name: skill.name || '',
        level: skill.level || 80,
        color: skill.color || '#2563EB',
      })
    } else {
      setEditingSkill('new')
      setSkillForm({
        name: '',
        level: 80,
        color: '#2563EB',
      })
    }
  }

  const handleSaveSkill = (e) => {
    e.preventDefault()
    if (editingSkill === 'new') {
      addSkill(skillForm)
      showNotify('New Skill added!')
    } else {
      updateSkill(editingSkill, skillForm)
      showNotify('Skill updated!')
    }
    setEditingSkill(null)
  }

  // --- Education Actions ---
  const openEduForm = (edu = null) => {
    if (edu) {
      setEditingEdu(edu.id)
      setEduForm({ ...edu })
    } else {
      setEditingEdu('new')
      setEduForm({
        degree: '',
        institution: '',
        period: '',
        location: '',
        description: '',
        nodeColor: 'blue',
      })
    }
  }

  const handleSaveEdu = (e) => {
    e.preventDefault()
    if (editingEdu === 'new') {
      addEducation(eduForm)
      showNotify('Academic Background added!')
    } else {
      updateEducation(editingEdu, eduForm)
      showNotify('Academic Background updated!')
    }
    setEditingEdu(null)
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-login-page" data-theme={theme}>
        <div className="admin-login-card">
          <div className="admin-login-header">
            <div className="admin-login-icon">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <h2>Admin Authentication</h2>
            <p>Please enter your credentials to access the Admin Control Center.</p>
          </div>

          {loginError && <div className="admin-login-error">{loginError}</div>}

          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="admin-form-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="admin-form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="admin-btn admin-btn-primary admin-login-btn">
              <FontAwesomeIcon icon={faKey} />
              Login to Admin Panel
            </button>
          </form>

          <div className="admin-login-footer">
            <a href="/" className="admin-back-link">
              <FontAwesomeIcon icon={faArrowLeft} /> Return to Main Website
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page" data-theme={theme}>
      {/* Top Header */}
      <header className="admin-header">
        <div className="admin-header-container">
          <div className="admin-brand">
            <span className="admin-badge">
              <FontAwesomeIcon icon={faShieldHalved} />
              ADMIN CONTROL CENTER
            </span>
            <h1 className="admin-title">Content Management System</h1>
          </div>

          <div className="admin-actions">
            <button className="admin-btn admin-btn-logout" onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Logout
            </button>
            <a href="/" className="admin-btn admin-btn-primary">
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to Main Website
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="admin-container">
        {notification && <div className="admin-notify">{notification}</div>}

        {/* Tab Navigation */}
        <nav className="admin-tabs">
          <button
            className={`admin-tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>About Me</span>
          </button>
          <button
            className={`admin-tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Work History</span>
          </button>
          <button
            className={`admin-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FontAwesomeIcon icon={faFolderOpen} />
            <span>Projects</span>
          </button>
          <button
            className={`admin-tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <FontAwesomeIcon icon={faCode} />
            <span>Skills</span>
          </button>
          <button
            className={`admin-tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Academic Background</span>
          </button>
        </nav>

        {/* Content Area */}
        <main className="admin-content-card">
          {/* TAB 1: ABOUT ME */}
          {activeTab === 'about' && (
            <form onSubmit={handleSaveAboutMe} className="admin-form">
              <h2 className="admin-section-heading">Edit About Me</h2>
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label>Current Role</label>
                  <input
                    type="text"
                    value={aboutForm.role}
                    onChange={(e) => setAboutForm({ ...aboutForm, role: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    value={aboutForm.company}
                    onChange={(e) => setAboutForm({ ...aboutForm, company: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>Career Start Date (for dynamic experience counter)</label>
                  <input
                    type="date"
                    value={aboutForm.startDate}
                    onChange={(e) => setAboutForm({ ...aboutForm, startDate: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    value={aboutForm.location}
                    onChange={(e) => setAboutForm({ ...aboutForm, location: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-form-group full-width">
                  <label>Tech Stack Summary</label>
                  <input
                    type="text"
                    value={aboutForm.stack}
                    onChange={(e) => setAboutForm({ ...aboutForm, stack: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-form-group full-width">
                  <label>Bio Paragraphs (Separate paragraphs with a blank line)</label>
                  <textarea
                    rows="6"
                    value={aboutForm.bioText}
                    onChange={(e) => setAboutForm({ ...aboutForm, bioText: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="admin-form-actions">
                <button type="submit" className="admin-btn admin-btn-save">
                  <FontAwesomeIcon icon={faFloppyDisk} />
                  Save About Me
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: WORK HISTORY */}
          {activeTab === 'experience' && (
            <div>
              <div className="admin-tab-header">
                <div>
                  <h2 className="admin-section-heading">Manage Work History</h2>
                  <p className="admin-section-sub">Add, edit, or delete work experience entries</p>
                </div>
                <button className="admin-btn admin-btn-add" onClick={() => openExpForm(null)}>
                  <FontAwesomeIcon icon={faPlus} />
                  Add Work Experience
                </button>
              </div>

              {editingExp && (
                <form onSubmit={handleSaveExp} className="admin-form admin-modal-form">
                  <h3>{editingExp === 'new' ? 'Add Work Experience' : 'Edit Work Experience'}</h3>
                  <div className="admin-form-grid">
                    <div className="admin-form-group">
                      <label>Job Role / Title</label>
                      <input
                        type="text"
                        value={expForm.role}
                        onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                        required
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Company</label>
                      <input
                        type="text"
                        value={expForm.company}
                        onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                        required
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Start Date</label>
                      <input
                        type="date"
                        value={expForm.startDate}
                        onChange={(e) => setExpForm({ ...expForm, startDate: e.target.value })}
                        required
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>End Date (Leave blank if Present)</label>
                      <input
                        type="date"
                        value={expForm.endDate || ''}
                        onChange={(e) => setExpForm({ ...expForm, endDate: e.target.value })}
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Period Label (e.g. April 2024 - Present)</label>
                      <input
                        type="text"
                        value={expForm.period}
                        onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                        required
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Location</label>
                      <input
                        type="text"
                        value={expForm.location}
                        onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
                        required
                      />
                    </div>
                    <div className="admin-form-group full-width">
                      <label>Description</label>
                      <textarea
                        rows="3"
                        value={expForm.description}
                        onChange={(e) => setExpForm({ ...expForm, description: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="admin-form-actions">
                    <button type="submit" className="admin-btn admin-btn-save">
                      <FontAwesomeIcon icon={faCheck} />
                      Save Entry
                    </button>
                    <button
                      type="button"
                      className="admin-btn admin-btn-cancel"
                      onClick={() => setEditingExp(null)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="admin-item-list">
                {experiences.map((item, index) => (
                  <div
                    key={item.id}
                    className="admin-list-item"
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('text/plain', index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      const fromIdx = Number(e.dataTransfer.getData('text/plain'))
                      if (!isNaN(fromIdx) && fromIdx !== index) {
                        moveItemInList('experiences', fromIdx, fromIdx > index ? 'up' : 'down')
                      }
                    }}
                  >
                    <div className="admin-grab-handle" title="Grab & drag to reorder">
                      <FontAwesomeIcon icon={faGripVertical} />
                    </div>
                    <div className="admin-item-info">
                      <h4>{item.role}</h4>
                      <p className="admin-item-meta">
                        {item.company} | {item.period} | {item.location}
                      </p>
                      <p className="admin-item-desc">{item.description}</p>
                    </div>
                    <div className="admin-item-actions">
                      <button
                        className="admin-btn-icon move"
                        disabled={index === 0}
                        onClick={() => moveItemInList('experiences', index, 'up')}
                        title="Move Up"
                      >
                        <FontAwesomeIcon icon={faArrowUp} />
                      </button>
                      <button
                        className="admin-btn-icon move"
                        disabled={index === experiences.length - 1}
                        onClick={() => moveItemInList('experiences', index, 'down')}
                        title="Move Down"
                      >
                        <FontAwesomeIcon icon={faArrowDown} />
                      </button>
                      <button
                        className="admin-btn-icon edit"
                        onClick={() => openExpForm(item)}
                        title="Edit"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button
                        className="admin-btn-icon delete"
                        onClick={() => {
                          if (window.confirm(`Delete ${item.role}?`)) {
                            deleteExperience(item.id)
                            showNotify('Experience deleted.')
                          }
                        }}
                        title="Delete"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PROJECTS */}
          {activeTab === 'projects' && (
            <div>
              <div className="admin-tab-header">
                <div>
                  <h2 className="admin-section-heading">Manage Projects</h2>
                  <p className="admin-section-sub">Add or edit My Projects and Contributed Projects</p>
                </div>
                <div className="admin-header-btns">
                  <button className="admin-btn admin-btn-add" onClick={() => openProjForm(null, false)}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add My Project
                  </button>
                  <button className="admin-btn admin-btn-add secondary" onClick={() => openProjForm(null, true)}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add Contributed Project
                  </button>
                </div>
              </div>

              {editingProj && (
                <form onSubmit={handleSaveProj} className="admin-form admin-modal-form">
                  <h3>
                    {editingProj === 'new' ? 'Add' : 'Edit'}{' '}
                    {isContributedProj ? 'Contributed Project' : 'My Project'}
                  </h3>
                  <div className="admin-form-grid">
                    <div className="admin-form-group">
                      <label>Project Title</label>
                      <input
                        type="text"
                        value={projForm.title}
                        onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                        required
                      />
                    </div>
                    {!isContributedProj && (
                      <>
                        <div className="admin-form-group">
                          <label>Subtitle / Tagline</label>
                          <input
                            type="text"
                            value={projForm.subtitle}
                            onChange={(e) => setProjForm({ ...projForm, subtitle: e.target.value })}
                          />
                        </div>
                        <div className="admin-form-group">
                          <label>Primary Tech Badge (e.g. .NET 9.0)</label>
                          <input
                            type="text"
                            value={projForm.tech}
                            onChange={(e) => setProjForm({ ...projForm, tech: e.target.value })}
                          />
                        </div>
                        <div className="admin-form-group">
                          <label>Image URL / Path (e.g. /watchx.png)</label>
                          <input
                            type="text"
                            value={projForm.image}
                            onChange={(e) => setProjForm({ ...projForm, image: e.target.value })}
                          />
                        </div>
                      </>
                    )}
                    <div className="admin-form-group full-width">
                      <label>Description</label>
                      <textarea
                        rows="3"
                        value={projForm.description}
                        onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="admin-form-actions">
                    <button type="submit" className="admin-btn admin-btn-save">
                      <FontAwesomeIcon icon={faCheck} />
                      Save Project
                    </button>
                    <button
                      type="button"
                      className="admin-btn admin-btn-cancel"
                      onClick={() => setEditingProj(null)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="admin-projects-section">
                <h3>My Projects ({myProjects.length})</h3>
                <div className="admin-item-list">
                  {myProjects.map((item, index) => (
                    <div
                      key={item.id}
                      className="admin-list-item"
                      draggable
                      onDragStart={(e) => e.dataTransfer.setData('text/plain', index)}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        const fromIdx = Number(e.dataTransfer.getData('text/plain'))
                        if (!isNaN(fromIdx) && fromIdx !== index) {
                          moveItemInList('myProjects', fromIdx, fromIdx > index ? 'up' : 'down')
                        }
                      }}
                    >
                      <div className="admin-grab-handle" title="Grab & drag to reorder">
                        <FontAwesomeIcon icon={faGripVertical} />
                      </div>
                      <div className="admin-item-info">
                        <h4>{item.title} {item.subtitle && <small>({item.subtitle})</small>}</h4>
                        <p className="admin-item-meta">{item.tech || 'No tech badge'} | Image: {item.image || 'None'}</p>
                        <p className="admin-item-desc">{item.description}</p>
                      </div>
                      <div className="admin-item-actions">
                        <button
                          className="admin-btn-icon move"
                          disabled={index === 0}
                          onClick={() => moveItemInList('myProjects', index, 'up')}
                          title="Move Up"
                        >
                          <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                        <button
                          className="admin-btn-icon move"
                          disabled={index === myProjects.length - 1}
                          onClick={() => moveItemInList('myProjects', index, 'down')}
                          title="Move Down"
                        >
                          <FontAwesomeIcon icon={faArrowDown} />
                        </button>
                        <button
                          className="admin-btn-icon edit"
                          onClick={() => openProjForm(item, false)}
                          title="Edit"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                          className="admin-btn-icon delete"
                          onClick={() => {
                            if (window.confirm(`Delete ${item.title}?`)) {
                              deleteProject(item.id, false)
                              showNotify('Project deleted.')
                            }
                          }}
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 style={{ marginTop: '2rem' }}>Contributed Projects ({contributedProjects.length})</h3>
                <div className="admin-item-list">
                  {contributedProjects.map((item, index) => (
                    <div
                      key={item.id}
                      className="admin-list-item"
                      draggable
                      onDragStart={(e) => e.dataTransfer.setData('text/plain', index)}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        const fromIdx = Number(e.dataTransfer.getData('text/plain'))
                        if (!isNaN(fromIdx) && fromIdx !== index) {
                          moveItemInList('contributedProjects', fromIdx, fromIdx > index ? 'up' : 'down')
                        }
                      }}
                    >
                      <div className="admin-grab-handle" title="Grab & drag to reorder">
                        <FontAwesomeIcon icon={faGripVertical} />
                      </div>
                      <div className="admin-item-info">
                        <h4>{item.title}</h4>
                        <p className="admin-item-desc">{item.description}</p>
                      </div>
                      <div className="admin-item-actions">
                        <button
                          className="admin-btn-icon move"
                          disabled={index === 0}
                          onClick={() => moveItemInList('contributedProjects', index, 'up')}
                          title="Move Up"
                        >
                          <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                        <button
                          className="admin-btn-icon move"
                          disabled={index === contributedProjects.length - 1}
                          onClick={() => moveItemInList('contributedProjects', index, 'down')}
                          title="Move Down"
                        >
                          <FontAwesomeIcon icon={faArrowDown} />
                        </button>
                        <button
                          className="admin-btn-icon edit"
                          onClick={() => openProjForm(item, true)}
                          title="Edit"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                          className="admin-btn-icon delete"
                          onClick={() => {
                            if (window.confirm(`Delete ${item.title}?`)) {
                              deleteProject(item.id, true)
                              showNotify('Contributed project deleted.')
                            }
                          }}
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SKILLS */}
          {activeTab === 'skills' && (
            <div>
              <div className="admin-tab-header">
                <div>
                  <h2 className="admin-section-heading">Manage Skills</h2>
                  <p className="admin-section-sub">Add, edit proficiency level %, or change brand colors</p>
                </div>
                <button className="admin-btn admin-btn-add" onClick={() => openSkillForm(null)}>
                  <FontAwesomeIcon icon={faPlus} />
                  Add New Skill
                </button>
              </div>

              {editingSkill && (
                <form onSubmit={handleSaveSkill} className="admin-form admin-modal-form">
                  <h3>{editingSkill === 'new' ? 'Add Skill' : 'Edit Skill'}</h3>
                  <div className="admin-form-grid">
                    <div className="admin-form-group">
                      <label>Skill Name</label>
                      <input
                        type="text"
                        value={skillForm.name}
                        onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Proficiency Level (%)</label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={skillForm.level}
                        onChange={(e) => setSkillForm({ ...skillForm, level: Number(e.target.value) })}
                        required
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Brand Logo / Accent Color (Hex)</label>
                      <div className="color-picker-row">
                        <input
                          type="color"
                          value={skillForm.color}
                          onChange={(e) => setSkillForm({ ...skillForm, color: e.target.value })}
                        />
                        <input
                          type="text"
                          value={skillForm.color}
                          onChange={(e) => setSkillForm({ ...skillForm, color: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="admin-form-actions">
                    <button type="submit" className="admin-btn admin-btn-save">
                      <FontAwesomeIcon icon={faCheck} />
                      Save Skill
                    </button>
                    <button
                      type="button"
                      className="admin-btn admin-btn-cancel"
                      onClick={() => setEditingSkill(null)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="admin-skills-grid">
                {skills.map((item, index) => (
                  <div
                    key={item.id}
                    className="admin-skill-card"
                    style={{ borderLeftColor: item.color }}
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('text/plain', index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      const fromIdx = Number(e.dataTransfer.getData('text/plain'))
                      if (!isNaN(fromIdx) && fromIdx !== index) {
                        moveItemInList('skills', fromIdx, fromIdx > index ? 'up' : 'down')
                      }
                    }}
                  >
                    <div className="admin-grab-handle" title="Grab & drag to reorder">
                      <FontAwesomeIcon icon={faGripVertical} />
                    </div>
                    <div className="admin-skill-details">
                      <span
                        className="admin-skill-dot"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <h4>{item.name}</h4>
                        <span className="admin-skill-level">{item.level}% Proficiency</span>
                      </div>
                    </div>
                    <div className="admin-item-actions">
                      <button
                        className="admin-btn-icon move"
                        disabled={index === 0}
                        onClick={() => moveItemInList('skills', index, 'up')}
                        title="Move Up"
                      >
                        <FontAwesomeIcon icon={faArrowUp} />
                      </button>
                      <button
                        className="admin-btn-icon move"
                        disabled={index === skills.length - 1}
                        onClick={() => moveItemInList('skills', index, 'down')}
                        title="Move Down"
                      >
                        <FontAwesomeIcon icon={faArrowDown} />
                      </button>
                      <button
                        className="admin-btn-icon edit"
                        onClick={() => openSkillForm(item)}
                        title="Edit"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button
                        className="admin-btn-icon delete"
                        onClick={() => {
                          if (window.confirm(`Delete skill ${item.name}?`)) {
                            deleteSkill(item.id)
                            showNotify('Skill deleted.')
                          }
                        }}
                        title="Delete"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ACADEMIC BACKGROUND */}
          {activeTab === 'education' && (
            <div>
              <div className="admin-tab-header">
                <div>
                  <h2 className="admin-section-heading">Manage Academic Background</h2>
                  <p className="admin-section-sub">Add or edit degrees, diplomas, and schools</p>
                </div>
                <button className="admin-btn admin-btn-add" onClick={() => openEduForm(null)}>
                  <FontAwesomeIcon icon={faPlus} />
                  Add Education Entry
                </button>
              </div>

              {editingEdu && (
                <form onSubmit={handleSaveEdu} className="admin-form admin-modal-form">
                  <h3>{editingEdu === 'new' ? 'Add Education' : 'Edit Education'}</h3>
                  <div className="admin-form-grid">
                    <div className="admin-form-group">
                      <label>Degree / Certificate Title</label>
                      <input
                        type="text"
                        value={eduForm.degree}
                        onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })}
                        required
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Institution / School Name</label>
                      <input
                        type="text"
                        value={eduForm.institution}
                        onChange={(e) => setEduForm({ ...eduForm, institution: e.target.value })}
                        required
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Period (e.g. 2019 - 2024)</label>
                      <input
                        type="text"
                        value={eduForm.period}
                        onChange={(e) => setEduForm({ ...eduForm, period: e.target.value })}
                        required
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Location</label>
                      <input
                        type="text"
                        value={eduForm.location}
                        onChange={(e) => setEduForm({ ...eduForm, location: e.target.value })}
                        required
                      />
                    </div>
                    <div className="admin-form-group full-width">
                      <label>Description</label>
                      <textarea
                        rows="3"
                        value={eduForm.description}
                        onChange={(e) => setEduForm({ ...eduForm, description: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="admin-form-actions">
                    <button type="submit" className="admin-btn admin-btn-save">
                      <FontAwesomeIcon icon={faCheck} />
                      Save Education
                    </button>
                    <button
                      type="button"
                      className="admin-btn admin-btn-cancel"
                      onClick={() => setEditingEdu(null)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="admin-item-list">
                {education.map((item, index) => (
                  <div
                    key={item.id}
                    className="admin-list-item"
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('text/plain', index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      const fromIdx = Number(e.dataTransfer.getData('text/plain'))
                      if (!isNaN(fromIdx) && fromIdx !== index) {
                        moveItemInList('education', fromIdx, fromIdx > index ? 'up' : 'down')
                      }
                    }}
                  >
                    <div className="admin-grab-handle" title="Grab & drag to reorder">
                      <FontAwesomeIcon icon={faGripVertical} />
                    </div>
                    <div className="admin-item-info">
                      <h4>{item.degree}</h4>
                      <p className="admin-item-meta">
                        {item.institution} | {item.period} | {item.location}
                      </p>
                      <p className="admin-item-desc">{item.description}</p>
                    </div>
                    <div className="admin-item-actions">
                      <button
                        className="admin-btn-icon move"
                        disabled={index === 0}
                        onClick={() => moveItemInList('education', index, 'up')}
                        title="Move Up"
                      >
                        <FontAwesomeIcon icon={faArrowUp} />
                      </button>
                      <button
                        className="admin-btn-icon move"
                        disabled={index === education.length - 1}
                        onClick={() => moveItemInList('education', index, 'down')}
                        title="Move Down"
                      >
                        <FontAwesomeIcon icon={faArrowDown} />
                      </button>
                      <button
                        className="admin-btn-icon edit"
                        onClick={() => openEduForm(item)}
                        title="Edit"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button
                        className="admin-btn-icon delete"
                        onClick={() => {
                          if (window.confirm(`Delete ${item.degree}?`)) {
                            deleteEducation(item.id)
                            showNotify('Education entry deleted.')
                          }
                        }}
                        title="Delete"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default AdminPanel
